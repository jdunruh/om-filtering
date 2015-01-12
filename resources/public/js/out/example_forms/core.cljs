(ns example-forms.core
   (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.set :as set]
            [clojure.string :as string]))

;; ===================================================================
;; filtering

(defn apply-range [field bottom top el]
  "predicate - check if the value in field is between top and bottom inclusive"
  (let [field-val (get el field)]
    (and (<= field-val top) (>= field-val bottom))))

(defn apply-discrete [field value el]
  "predicate - check if the value is contained in the field"
  (if (some #(= % value) (get el field)) true false))

;; ====================================================================
;; Data

(def app-state
  (atom{:selectors
        [{:title "Price"
          :type  :range
          :field :price
          :content
                 [{:label "$1-3" :bottom 1 :top 3 :func (partial apply-range :price 1 3) :checked true}
                  {:label "$4-6" :bottom 4 :top 6 :func (partial apply-range :price 4 6) :checked true}
                  {:label "$7-10" :bottom 7 :top 10 :func (partial apply-range :price 7 10) :checked true}]}

         {:title "Genres"
          :type  :discrete-selection
          :field :genre
          :content
                 [{:label "Comedy" :selector :comedy :func (partial apply-discrete :genre :comedy) :checked true}
                  {:label "Horror" :selector :horror :func (partial apply-discrete :genre :horror) :checked true}
                  {:label "SciFi"  :selectar :scifi  :func (partial apply-discrete :genre :scifi) :checked true}
                  {:label "Drama"  :selector :drama  :func (partial apply-discrete :genre :drama) :checked true}]}]
        :data
        [{:title "Alien" :genre [:scifi :horror] :price 4}
         {:title "The Birds" :genre [:horror] :price 2}
         {:title "Ben Hur" :genre [:drama] :price 1}
         {:title "Blazing Saddles" :genre [:comedy] :price 5}
         {:title "Galaxy Quest" :genre [:comedy :scifi] :price 8}
         {:title "Django Unchained" :genre [:drama] :price 9}]}))

;; =============================================================================
;; Time Travel

(def app-history (atom [@app-state]))

(add-watch app-state :history
           (fn [_ _ _ n]
             (when-not (= (last @app-history) n)
               (swap! app-history conj n))))

;; ==============================================================================
;; Filtering

(defn process-selector [selector data]
  (reduce into #{} (for [x (:content selector) :when (:checked x)]
                                             (filter (:func x) data))))

(defn filter-data [state]
  (apply set/intersection (map #(process-selector % (:data state)) (:selectors state))))

;; ==============================================================================
;; DOM

(defn filter-view [selector _]
  "the view for a single filter selection checkbox"
  (reify
    om/IRender
    (render [_]
      (dom/p nil (dom/input #js {:type "checkbox" :checked (:checked selector) :onChange (fn [e] (om/transact! selector :checked not))}
                            (:label selector))))))

(defn filter-section-view [selector-block _]
  (reify
    om/IRender
    (render [ _ ]
      (dom/div nil
        (dom/p #js {:className "filterBlockTitle"} (:title selector-block))
        (apply dom/div nil (om/build-all filter-view (:content selector-block)))))))

(defn table-row [data]
  (dom/tr nil
    (dom/td nil (:title data))
    (dom/td nil (string/join " " (map name (:genre data))))
    (dom/td nil (:price data))))

(defn main-view [state]
  (reify
    om/IRender
    (render [ _ ]
      (dom/div #js {:id "main"}
               (dom/table #js {:className "centeder-table"}
                 (apply dom/tbody nil (map table-row (filter-data state))))
               (dom/button #js {:type "button" :id "undo"
                                :onClick (fn [e]
                                           (when (> (count @app-history) 1)
                                             (.log js/console "Time Travel in progress")
                                             (swap! app-history pop)
                                             (reset! app-state (last @app-history))))} "Undo")))))

(defn filtered-list-view [app-state]
  (reify
    om/IRender
    (render [ _ ]
      (dom/div #js {:id "content"}
               (apply dom/div #js {:id "filter-block"}
                        (om/build-all filter-section-view (:selectors app-state)))
               (dom/div #js {:id "main"} (om/build main-view app-state))))))

(om/root filtered-list-view app-state
         {:target (. js/document (getElementById "body"))})

