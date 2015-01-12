// Compiled by ClojureScript 0.0-2371
goog.provide('example_forms.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
example_forms.core.apply_range = (function apply_range(field,bottom,top,el){var field_val = cljs.core.get.call(null,el,field);return ((field_val <= top)) && ((field_val >= bottom));
});
example_forms.core.apply_discrete = (function apply_discrete(field,value,el){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__19366_SHARP_){return cljs.core._EQ_.call(null,p1__19366_SHARP_,value);
}),cljs.core.get.call(null,el,field))))
{return true;
} else
{return false;
}
});
example_forms.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selectors","selectors",-680741768),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Price",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"price","price",22129180),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"$1-3",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(1),new cljs.core.Keyword(null,"top","top",-1856271961),(3),new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.partial.call(null,example_forms.core.apply_range,new cljs.core.Keyword(null,"price","price",22129180),(1),(3)),new cljs.core.Keyword(null,"checked","checked",-50955819),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"$4-6",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(4),new cljs.core.Keyword(null,"top","top",-1856271961),(6),new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.partial.call(null,example_forms.core.apply_range,new cljs.core.Keyword(null,"price","price",22129180),(4),(6)),new cljs.core.Keyword(null,"checked","checked",-50955819),true], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"$7-10",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(7),new cljs.core.Keyword(null,"top","top",-1856271961),(10),new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.partial.call(null,example_forms.core.apply_range,new cljs.core.Keyword(null,"price","price",22129180),(7),(10)),new cljs.core.Keyword(null,"checked","checked",-50955819),true], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Genres",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"discrete-selection","discrete-selection",1935947483),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"genre","genre",-1415803776),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Comedy",new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"comedy","comedy",753830519),new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.partial.call(null,example_forms.core.apply_discrete,new cljs.core.Keyword(null,"genre","genre",-1415803776),new cljs.core.Keyword(null,"comedy","comedy",753830519)),new cljs.core.Keyword(null,"checked","checked",-50955819),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Horror",new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"horror","horror",71346181),new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.partial.call(null,example_forms.core.apply_discrete,new cljs.core.Keyword(null,"genre","genre",-1415803776),new cljs.core.Keyword(null,"horror","horror",71346181)),new cljs.core.Keyword(null,"checked","checked",-50955819),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"SciFi",new cljs.core.Keyword(null,"selectar","selectar",1568740217),new cljs.core.Keyword(null,"scifi","scifi",375520131),new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.partial.call(null,example_forms.core.apply_discrete,new cljs.core.Keyword(null,"genre","genre",-1415803776),new cljs.core.Keyword(null,"scifi","scifi",375520131)),new cljs.core.Keyword(null,"checked","checked",-50955819),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Drama",new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"drama","drama",1375581774),new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.partial.call(null,example_forms.core.apply_discrete,new cljs.core.Keyword(null,"genre","genre",-1415803776),new cljs.core.Keyword(null,"drama","drama",1375581774)),new cljs.core.Keyword(null,"checked","checked",-50955819),true], null)], null)], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Alien",new cljs.core.Keyword(null,"genre","genre",-1415803776),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scifi","scifi",375520131),new cljs.core.Keyword(null,"horror","horror",71346181)], null),new cljs.core.Keyword(null,"price","price",22129180),(4)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"The Birds",new cljs.core.Keyword(null,"genre","genre",-1415803776),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"horror","horror",71346181)], null),new cljs.core.Keyword(null,"price","price",22129180),(2)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Ben Hur",new cljs.core.Keyword(null,"genre","genre",-1415803776),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drama","drama",1375581774)], null),new cljs.core.Keyword(null,"price","price",22129180),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Blazing Saddles",new cljs.core.Keyword(null,"genre","genre",-1415803776),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comedy","comedy",753830519)], null),new cljs.core.Keyword(null,"price","price",22129180),(5)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Galaxy Quest",new cljs.core.Keyword(null,"genre","genre",-1415803776),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comedy","comedy",753830519),new cljs.core.Keyword(null,"scifi","scifi",375520131)], null),new cljs.core.Keyword(null,"price","price",22129180),(8)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Django Unchained",new cljs.core.Keyword(null,"genre","genre",-1415803776),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drama","drama",1375581774)], null),new cljs.core.Keyword(null,"price","price",22129180),(9)], null)], null)], null));
example_forms.core.app_history = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,example_forms.core.app_state)], null));
cljs.core.add_watch.call(null,example_forms.core.app_state,new cljs.core.Keyword(null,"history","history",-247395220),(function (_,___$1,___$2,n){if(cljs.core._EQ_.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,example_forms.core.app_history)),n))
{return null;
} else
{return cljs.core.swap_BANG_.call(null,example_forms.core.app_history,cljs.core.conj,n);
}
}));
example_forms.core.process_selector = (function process_selector(selector,data){return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,(function (){var iter__4324__auto__ = (function iter__19371(s__19372){return (new cljs.core.LazySeq(null,(function (){var s__19372__$1 = s__19372;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19372__$1);if(temp__4126__auto__)
{var s__19372__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19372__$2))
{var c__4322__auto__ = cljs.core.chunk_first.call(null,s__19372__$2);var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);var b__19374 = cljs.core.chunk_buffer.call(null,size__4323__auto__);if((function (){var i__19373 = (0);while(true){
if((i__19373 < size__4323__auto__))
{var x = cljs.core._nth.call(null,c__4322__auto__,i__19373);if(cljs.core.truth_(new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(x)))
{cljs.core.chunk_append.call(null,b__19374,cljs.core.filter.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(x),data));
{
var G__19375 = (i__19373 + (1));
i__19373 = G__19375;
continue;
}
} else
{{
var G__19376 = (i__19373 + (1));
i__19373 = G__19376;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19374),iter__19371.call(null,cljs.core.chunk_rest.call(null,s__19372__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19374),null);
}
} else
{var x = cljs.core.first.call(null,s__19372__$2);if(cljs.core.truth_(new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(x)))
{return cljs.core.cons.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(x),data),iter__19371.call(null,cljs.core.rest.call(null,s__19372__$2)));
} else
{{
var G__19377 = cljs.core.rest.call(null,s__19372__$2);
s__19372__$1 = G__19377;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4324__auto__.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(selector));
})());
});
example_forms.core.filter_data = (function filter_data(state){return cljs.core.apply.call(null,clojure.set.intersection,cljs.core.map.call(null,(function (p1__19378_SHARP_){return example_forms.core.process_selector.call(null,p1__19378_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(state));
}),new cljs.core.Keyword(null,"selectors","selectors",-680741768).cljs$core$IFn$_invoke$arity$1(state)));
});
example_forms.core.filter_view = (function filter_view(selector,_){if(typeof example_forms.core.t19382 !== 'undefined')
{} else
{
/**
* @constructor
*/
example_forms.core.t19382 = (function (_,selector,filter_view,meta19383){
this._ = _;
this.selector = selector;
this.filter_view = filter_view;
this.meta19383 = meta19383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example_forms.core.t19382.cljs$lang$type = true;
example_forms.core.t19382.cljs$lang$ctorStr = "example-forms.core/t19382";
example_forms.core.t19382.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"example-forms.core/t19382");
});
example_forms.core.t19382.prototype.om$core$IRender$ = true;
example_forms.core.t19382.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.p(null,om.dom.input.call(null,{"onChange": ((function (___$3){
return (function (e){return om.core.transact_BANG_.call(null,self__.selector,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.not);
});})(___$3))
, "checked": new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(self__.selector), "type": "checkbox"},new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(self__.selector)));
});
example_forms.core.t19382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19384){var self__ = this;
var _19384__$1 = this;return self__.meta19383;
});
example_forms.core.t19382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19384,meta19383__$1){var self__ = this;
var _19384__$1 = this;return (new example_forms.core.t19382(self__._,self__.selector,self__.filter_view,meta19383__$1));
});
example_forms.core.__GT_t19382 = (function __GT_t19382(___$1,selector__$1,filter_view__$1,meta19383){return (new example_forms.core.t19382(___$1,selector__$1,filter_view__$1,meta19383));
});
}
return (new example_forms.core.t19382(_,selector,filter_view,null));
});
example_forms.core.filter_section_view = (function filter_section_view(selector_block,_){if(typeof example_forms.core.t19388 !== 'undefined')
{} else
{
/**
* @constructor
*/
example_forms.core.t19388 = (function (_,selector_block,filter_section_view,meta19389){
this._ = _;
this.selector_block = selector_block;
this.filter_section_view = filter_section_view;
this.meta19389 = meta19389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example_forms.core.t19388.cljs$lang$type = true;
example_forms.core.t19388.cljs$lang$ctorStr = "example-forms.core/t19388";
example_forms.core.t19388.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"example-forms.core/t19388");
});
example_forms.core.t19388.prototype.om$core$IRender$ = true;
example_forms.core.t19388.prototype.om$core$IRender$render$arity$1 = (function (___$2){var self__ = this;
var ___$3 = this;return React.DOM.div(null,React.DOM.p({"className": "filterBlockTitle"},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.selector_block)),cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,example_forms.core.filter_view,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(self__.selector_block))));
});
example_forms.core.t19388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19390){var self__ = this;
var _19390__$1 = this;return self__.meta19389;
});
example_forms.core.t19388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19390,meta19389__$1){var self__ = this;
var _19390__$1 = this;return (new example_forms.core.t19388(self__._,self__.selector_block,self__.filter_section_view,meta19389__$1));
});
example_forms.core.__GT_t19388 = (function __GT_t19388(___$1,selector_block__$1,filter_section_view__$1,meta19389){return (new example_forms.core.t19388(___$1,selector_block__$1,filter_section_view__$1,meta19389));
});
}
return (new example_forms.core.t19388(_,selector_block,filter_section_view,null));
});
example_forms.core.table_row = (function table_row(data){return React.DOM.tr(null,React.DOM.td(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data)),React.DOM.td(null,clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,new cljs.core.Keyword(null,"genre","genre",-1415803776).cljs$core$IFn$_invoke$arity$1(data)))),React.DOM.td(null,new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(data)));
});
example_forms.core.main_view = (function main_view(state){if(typeof example_forms.core.t19394 !== 'undefined')
{} else
{
/**
* @constructor
*/
example_forms.core.t19394 = (function (state,main_view,meta19395){
this.state = state;
this.main_view = main_view;
this.meta19395 = meta19395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example_forms.core.t19394.cljs$lang$type = true;
example_forms.core.t19394.cljs$lang$ctorStr = "example-forms.core/t19394";
example_forms.core.t19394.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"example-forms.core/t19394");
});
example_forms.core.t19394.prototype.om$core$IRender$ = true;
example_forms.core.t19394.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "main"},React.DOM.table({"className": "centeder-table"},cljs.core.apply.call(null,om.dom.tbody,null,cljs.core.map.call(null,example_forms.core.table_row,example_forms.core.filter_data.call(null,self__.state)))),React.DOM.button({"onClick": ((function (___$1){
return (function (e){if((cljs.core.count.call(null,cljs.core.deref.call(null,example_forms.core.app_history)) > (1)))
{console.log("Time Travel in progress");
cljs.core.swap_BANG_.call(null,example_forms.core.app_history,cljs.core.pop);
return cljs.core.reset_BANG_.call(null,example_forms.core.app_state,cljs.core.last.call(null,cljs.core.deref.call(null,example_forms.core.app_history)));
} else
{return null;
}
});})(___$1))
, "id": "undo", "type": "button"},"Undo"));
});
example_forms.core.t19394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19396){var self__ = this;
var _19396__$1 = this;return self__.meta19395;
});
example_forms.core.t19394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19396,meta19395__$1){var self__ = this;
var _19396__$1 = this;return (new example_forms.core.t19394(self__.state,self__.main_view,meta19395__$1));
});
example_forms.core.__GT_t19394 = (function __GT_t19394(state__$1,main_view__$1,meta19395){return (new example_forms.core.t19394(state__$1,main_view__$1,meta19395));
});
}
return (new example_forms.core.t19394(state,main_view,null));
});
example_forms.core.filtered_list_view = (function filtered_list_view(app_state){if(typeof example_forms.core.t19400 !== 'undefined')
{} else
{
/**
* @constructor
*/
example_forms.core.t19400 = (function (app_state,filtered_list_view,meta19401){
this.app_state = app_state;
this.filtered_list_view = filtered_list_view;
this.meta19401 = meta19401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
example_forms.core.t19400.cljs$lang$type = true;
example_forms.core.t19400.cljs$lang$ctorStr = "example-forms.core/t19400";
example_forms.core.t19400.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"example-forms.core/t19400");
});
example_forms.core.t19400.prototype.om$core$IRender$ = true;
example_forms.core.t19400.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "content"},cljs.core.apply.call(null,om.dom.div,{"id": "filter-block"},om.core.build_all.call(null,example_forms.core.filter_section_view,new cljs.core.Keyword(null,"selectors","selectors",-680741768).cljs$core$IFn$_invoke$arity$1(self__.app_state))),React.DOM.div({"id": "main"},om.core.build.call(null,example_forms.core.main_view,self__.app_state)));
});
example_forms.core.t19400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19402){var self__ = this;
var _19402__$1 = this;return self__.meta19401;
});
example_forms.core.t19400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19402,meta19401__$1){var self__ = this;
var _19402__$1 = this;return (new example_forms.core.t19400(self__.app_state,self__.filtered_list_view,meta19401__$1));
});
example_forms.core.__GT_t19400 = (function __GT_t19400(app_state__$1,filtered_list_view__$1,meta19401){return (new example_forms.core.t19400(app_state__$1,filtered_list_view__$1,meta19401));
});
}
return (new example_forms.core.t19400(app_state,filtered_list_view,null));
});
om.core.root.call(null,example_forms.core.filtered_list_view,example_forms.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("body")], null));

//# sourceMappingURL=core.js.map