// Compiled by ClojureScript 0.0-2371
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;
om.core.IDisplayName = (function (){var obj13779 = {};return obj13779;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.display_name[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.display_name["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});
om.core.IInitState = (function (){var obj13781 = {};return obj13781;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.init_state[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.init_state["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj13783 = {};return obj13783;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.should_update[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.should_update["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj13785 = {};return obj13785;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.will_mount[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.will_mount["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj13787 = {};return obj13787;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.did_mount[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.did_mount["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUnmount = (function (){var obj13789 = {};return obj13789;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.will_unmount[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.will_unmount["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj13791 = {};return obj13791;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.will_update[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.will_update["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj13793 = {};return obj13793;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.did_update[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.did_update["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});
om.core.IWillReceiveProps = (function (){var obj13795 = {};return obj13795;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.will_receive_props[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.will_receive_props["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});
om.core.IRender = (function (){var obj13797 = {};return obj13797;
})();
om.core.render = (function render(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.render[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.render["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderProps = (function (){var obj13799 = {};return obj13799;
})();
om.core.render_props = (function render_props(this$,props,state){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRenderProps$render_props$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.render_props[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.render_props["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});
om.core.IRenderState = (function (){var obj13801 = {};return obj13801;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core.render_state[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core.render_state["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.ICheckState = (function (){var obj13803 = {};return obj13803;
})();
om.core.IOmSwap = (function (){var obj13805 = {};return obj13805;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._om_swap_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});
om.core.IGetState = (function (){var obj13807 = {};return obj13807;
})();
om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IGetState$_get_state$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._get_state[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._get_state["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IGetState$_get_state$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._get_state[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._get_state["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;
om.core.IGetRenderState = (function (){var obj13809 = {};return obj13809;
})();
om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._get_render_state[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._get_render_state["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._get_render_state[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._get_render_state["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;
om.core.ISetState = (function (){var obj13811 = {};return obj13811;
})();
om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;
om.core.IRenderQueue = (function (){var obj13813 = {};return obj13813;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._get_queue[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._get_queue["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});
om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._queue_render_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._empty_queue_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});
om.core.IValue = (function (){var obj13815 = {};return obj13815;
})();
om.core._value = (function _value(x){if((function (){var and__3573__auto__ = x;if(and__3573__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__3573__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__4222__auto__ = (((x == null))?null:x);return (function (){var or__3585__auto__ = (om.core._value[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._value["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj13817 = {};return obj13817;
})();
om.core._path = (function _path(cursor){if((function (){var and__3573__auto__ = cursor;if(and__3573__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__3573__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__4222__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3585__auto__ = (om.core._path[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._path["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__3573__auto__ = cursor;if(and__3573__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__3573__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__4222__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3585__auto__ = (om.core._state[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._state["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj13819 = {};return obj13819;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__3573__auto__ = value;if(and__3573__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__3573__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__4222__auto__ = (((value == null))?null:value);return (function (){var or__3585__auto__ = (om.core._to_cursor[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._to_cursor["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__3573__auto__ = value;if(and__3573__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__3573__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__4222__auto__ = (((value == null))?null:value);return (function (){var or__3585__auto__ = (om.core._to_cursor[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._to_cursor["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;
om.core.ICursorDerive = (function (){var obj13821 = {};return obj13821;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__3573__auto__ = cursor;if(and__3573__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__3573__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__4222__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3585__auto__ = (om.core._derive[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._derive["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});
(om.core.ICursorDerive["_"] = true);
(om.core._derive["_"] = (function (this$,derived,state,path){return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){return om.core._state.call(null,cursor);
});
om.core.ITransact = (function (){var obj13823 = {};return obj13823;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__3573__auto__ = cursor;if(and__3573__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__3573__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__4222__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3585__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._transact_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});
om.core.INotify = (function (){var obj13825 = {};return obj13825;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__3573__auto__ = x;if(and__3573__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__4222__auto__ = (((x == null))?null:x);return (function (){var or__3585__auto__ = (om.core._listen_BANG_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._listen_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});
om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){if((function (){var and__3573__auto__ = x;if(and__3573__auto__)
{return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else
{var x__4222__auto__ = (((x == null))?null:x);return (function (){var or__3585__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._unlisten_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});
om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){if((function (){var and__3573__auto__ = x;if(and__3573__auto__)
{return x.om$core$INotify$_notify_BANG_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else
{var x__4222__auto__ = (((x == null))?null:x);return (function (){var or__3585__auto__ = (om.core._notify_BANG_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._notify_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.IRootProperties = (function (){var obj13827 = {};return obj13827;
})();
om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._set_property_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});
om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._remove_property_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._remove_properties_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});
om.core._get_property = (function _get_property(this$,id,p){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IRootProperties$_get_property$arity$3;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._get_property[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._get_property["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});
om.core.IRootKey = (function (){var obj13829 = {};return obj13829;
})();
om.core._root_key = (function _root_key(cursor){if((function (){var and__3573__auto__ = cursor;if(and__3573__auto__)
{return cursor.om$core$IRootKey$_root_key$arity$1;
} else
{return and__3573__auto__;
}
})())
{return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else
{var x__4222__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3585__auto__ = (om.core._root_key[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._root_key["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IAdapt = (function (){var obj13831 = {};return obj13831;
})();
om.core._adapt = (function _adapt(this$,other){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IAdapt$_adapt$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._adapt[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._adapt["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});
(om.core.IAdapt["_"] = true);
(om.core._adapt["_"] = (function (_,other){return other;
}));
om.core.adapt = (function adapt(x,other){return om.core._adapt.call(null,x,other);
});
om.core.IOmRef = (function (){var obj13833 = {};return obj13833;
})();
om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._add_dep_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._remove_dep_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._refresh_deps_BANG_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});
om.core._get_deps = (function _get_deps(this$){if((function (){var and__3573__auto__ = this$;if(and__3573__auto__)
{return this$.om$core$IOmRef$_get_deps$arity$1;
} else
{return and__3573__auto__;
}
})())
{return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else
{var x__4222__auto__ = (((this$ == null))?null:this$);return (function (){var or__3585__auto__ = (om.core._get_deps[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (om.core._get_deps["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = cljs.core.deref.call(null,state);var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);var ret = (((function (){var G__13835 = state;if(G__13835)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13835.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__13835.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__13835);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__13835);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178)))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);if(!((tag == null)))
{return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else
{return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__13837 = x;if(G__13837)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13837.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__13837.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__13837);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__13837);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_.call(null,c))
{return node.props.children = c.call(null,node);
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_state.call(null,owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){if((owner == null))
{return null;
} else
{return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_shared.call(null,owner);
} else
{return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4126__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var pending_state = temp__4126__auto__;var G__13839 = state;(G__13839["__om_prev_state"] = (state["__om_state"]));
(G__13839["__om_state"] = pending_state);
(G__13839["__om_pending_state"] = null);
return G__13839;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__3585__auto__ = props;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return owner.props;
}
})();var temp__4126__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var props_state = temp__4126__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__3585__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){var val = om.core.value.call(null,ref);var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){var cstate = c.state;var refs = (cstate["__om_refs"]);if((cljs.core.count.call(null,refs) === (0)))
{return null;
} else
{return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){var ref_val = om.core.value.call(null,ref);var ref_state = om.core.state.call(null,ref);var ref_path = om.core.path.call(null,ref);var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))
{if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_))
{return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else
{return ref;
}
} else
{return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__13841 = c;if(G__13841)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13841.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__13841.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__13841);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__13841);
}
})())
{var state_13862 = this$.state;om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__3585__auto__ = (state_13862["__om_prev_state"]);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return (state_13862["__om_state"]);
}
})());
} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__13842 = c;if(G__13842)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13842.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__13842.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__13842);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__13842);
}
})())
{om.core.will_unmount.call(null,c);
} else
{}
var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__13843 = cljs.core.seq.call(null,refs);var chunk__13844 = null;var count__13845 = (0);var i__13846 = (0);while(true){
if((i__13846 < count__13845))
{var ref = cljs.core._nth.call(null,chunk__13844,i__13846);om.core.unobserve.call(null,this$,ref);
{
var G__13863 = seq__13843;
var G__13864 = chunk__13844;
var G__13865 = count__13845;
var G__13866 = (i__13846 + (1));
seq__13843 = G__13863;
chunk__13844 = G__13864;
count__13845 = G__13865;
i__13846 = G__13866;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__13843);if(temp__4126__auto____$1)
{var seq__13843__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13843__$1))
{var c__4355__auto__ = cljs.core.chunk_first.call(null,seq__13843__$1);{
var G__13867 = cljs.core.chunk_rest.call(null,seq__13843__$1);
var G__13868 = c__4355__auto__;
var G__13869 = cljs.core.count.call(null,c__4355__auto__);
var G__13870 = (0);
seq__13843 = G__13867;
chunk__13844 = G__13868;
count__13845 = G__13869;
i__13846 = G__13870;
continue;
}
} else
{var ref = cljs.core.first.call(null,seq__13843__$1);om.core.unobserve.call(null,this$,ref);
{
var G__13871 = cljs.core.next.call(null,seq__13843__$1);
var G__13872 = null;
var G__13873 = (0);
var G__13874 = (0);
seq__13843 = G__13871;
chunk__13844 = G__13872;
count__13845 = G__13873;
i__13846 = G__13874;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}),(function (next_props){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__13847 = c;if(G__13847)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13847.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__13847.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__13847);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__13847);
}
})())
{return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props}));
} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var props = this$.props;var state = this$.state;var c = om.core.children.call(null,this$);om.core.merge_props_state.call(null,this$,next_props);
if((function (){var G__13848 = c;if(G__13848)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13848.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__13848.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__13848);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__13848);
}
})())
{return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else
{var cursor = (props["__om_cursor"]);var next_cursor = (next_props["__om_cursor"]);if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor)))
{return true;
} else
{if((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor))))
{return true;
} else
{if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$)))
{return true;
} else
{if(cljs.core.truth_((function (){var and__3573__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));if(and__3573__auto__)
{return cljs.core.some.call(null,((function (and__3573__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__13840_SHARP_){return om.core.ref_changed_QMARK_.call(null,p1__13840_SHARP_);
});})(and__3573__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else
{return and__3573__auto__;
}
})()))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{return false;

}
}
}
}
}
}
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var _STAR_parent_STAR_13849 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_13850 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_13851 = om.core._STAR_instrument_STAR_;var _STAR_descriptor_STAR_13852 = om.core._STAR_descriptor_STAR_;var _STAR_root_key_STAR_13853 = om.core._STAR_root_key_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);
om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);
if((function (){var G__13854 = c;if(G__13854)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13854.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__13854.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__13854);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__13854);
}
})())
{return om.core.render.call(null,c);
} else
{if((function (){var G__13855 = c;if(G__13855)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13855.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__13855.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__13855);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__13855);
}
})())
{return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else
{if((function (){var G__13856 = c;if(G__13856)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13856.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__13856.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__13856);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__13856);
}
})())
{return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else
{return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_13853;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_13852;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_13851;
om.core._STAR_state_STAR_ = _STAR_state_STAR_13850;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_13849;
}}),(function (next_props,next_state){var this$ = this;var c_13875 = om.core.children.call(null,this$);if((function (){var G__13857 = c_13875;if(G__13857)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13857.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__13857.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__13857);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__13857);
}
})())
{var state_13876 = this$.state;om.core.will_update.call(null,c_13875,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else
{}
om.core.merge_pending_state.call(null,this$);
return om.core.update_refs.call(null,this$);
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__3585__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__13858 = c;if(G__13858)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13858.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__13858.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__13858);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__13858);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__3585__auto__ = id;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);var cursor = (this$.props["__om_cursor"]);if((function (){var G__13859 = c;if(G__13859)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13859.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__13859.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__13859);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__13859);
}
})())
{return om.core.did_mount.call(null,c);
} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__13860 = c;if(G__13860)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13860.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__13860.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__13860);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__13860);
}
})())
{return om.core.display_name.call(null,c);
} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_13877 = om.core.children.call(null,this$);if((function (){var G__13861 = c_13877;if(G__13861)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13861.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__13861.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__13861);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__13861);
}
})())
{om.core.will_mount.call(null,c_13877);
} else
{}
return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x13879 = obj;x13879.om$core$IGetState$ = true;
x13879.om$core$IGetState$_get_state$arity$1 = ((function (x13879){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__3585__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return (state["__om_state"]);
}
});})(x13879))
;
x13879.om$core$IGetState$_get_state$arity$2 = ((function (x13879){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x13879))
;
x13879.om$core$IGetRenderState$ = true;
x13879.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x13879){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x13879))
;
x13879.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x13879){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x13879))
;
x13879.om$core$ISetState$ = true;
x13879.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x13879){
return (function (this$,val,render){var this$__$1 = this;var props = this$__$1.props;var app_state = (props["__om_app_state"]);(this$__$1.state["__om_pending_state"] = val);
if(cljs.core.truth_((function (){var and__3573__auto__ = !((app_state == null));if(and__3573__auto__)
{return render;
} else
{return and__3573__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else
{return null;
}
});})(x13879))
;
x13879.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x13879){
return (function (this$,ks,val,render){var this$__$1 = this;var props = this$__$1.props;var state = this$__$1.state;var pstate = om.core._get_state.call(null,this$__$1);var app_state = (props["__om_app_state"]);(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));
if(cljs.core.truth_((function (){var and__3573__auto__ = !((app_state == null));if(and__3573__auto__)
{return render;
} else
{return and__3573__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else
{return null;
}
});})(x13879))
;
return x13879;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function react_id(x){var id = (x["_rootNodeID"]);if(cljs.core.truth_(id))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null))))));
}
return id;
});
om.core.get_gstate = (function get_gstate(owner){return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){var gstate = om.core.get_gstate.call(null,owner);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else
{return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__3585__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var om_id = (function (){var or__3585__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__13880 = c;if(G__13880)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13880.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__13880.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__13880);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__13880);
}
})())?om.core.init_state.call(null,c):null));var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);(props["__om_init_state"] = null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);
return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_13889 = om.core.children.call(null,this$);if((function (){var G__13881 = c_13889;if(G__13881)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13881.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__13881.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__13881);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__13881);
}
})())
{om.core.will_mount.call(null,c_13889);
} else
{}
return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){var this$ = this;var c = om.core.children.call(null,this$);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);if((function (){var G__13882 = c;if(G__13882)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13882.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__13882.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__13882);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__13882);
}
})())
{om.core.will_unmount.call(null,c);
} else
{}
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,spath,cljs.core.dissoc);
var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));if(temp__4126__auto__)
{var refs = temp__4126__auto__;var seq__13883 = cljs.core.seq.call(null,refs);var chunk__13884 = null;var count__13885 = (0);var i__13886 = (0);while(true){
if((i__13886 < count__13885))
{var ref = cljs.core._nth.call(null,chunk__13884,i__13886);om.core.unobserve.call(null,this$,ref);
{
var G__13890 = seq__13883;
var G__13891 = chunk__13884;
var G__13892 = count__13885;
var G__13893 = (i__13886 + (1));
seq__13883 = G__13890;
chunk__13884 = G__13891;
count__13885 = G__13892;
i__13886 = G__13893;
continue;
}
} else
{var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__13883);if(temp__4126__auto____$1)
{var seq__13883__$1 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13883__$1))
{var c__4355__auto__ = cljs.core.chunk_first.call(null,seq__13883__$1);{
var G__13894 = cljs.core.chunk_rest.call(null,seq__13883__$1);
var G__13895 = c__4355__auto__;
var G__13896 = cljs.core.count.call(null,c__4355__auto__);
var G__13897 = (0);
seq__13883 = G__13894;
chunk__13884 = G__13895;
count__13885 = G__13896;
i__13886 = G__13897;
continue;
}
} else
{var ref = cljs.core.first.call(null,seq__13883__$1);om.core.unobserve.call(null,this$,ref);
{
var G__13898 = cljs.core.next.call(null,seq__13883__$1);
var G__13899 = null;
var G__13900 = (0);
var G__13901 = (0);
seq__13883 = G__13898;
chunk__13884 = G__13899;
count__13885 = G__13900;
i__13886 = G__13901;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){var this$ = this;var props_13902 = this$.props;var c_13903 = om.core.children.call(null,this$);if((function (){var G__13887 = c_13903;if(G__13887)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13887.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__13887.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__13887);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__13887);
}
})())
{var state_13904 = this$.state;om.core.will_update.call(null,c_13903,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else
{}
om.core.no_local_merge_pending_state.call(null,this$);
return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);var gstate = om.core.get_gstate.call(null,this$);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);if((function (){var G__13888 = c;if(G__13888)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13888.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__13888.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__13888);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__13888);
}
})())
{var state_13905 = this$.state;om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__3585__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else
{return null;
}
}));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){var x13907 = cljs.core.clj__GT_js.call(null,methods$);x13907.om$core$IGetState$ = true;
x13907.om$core$IGetState$_get_state$arity$1 = ((function (x13907){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);var or__3585__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x13907))
;
x13907.om$core$IGetState$_get_state$arity$2 = ((function (x13907){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x13907))
;
x13907.om$core$IGetRenderState$ = true;
x13907.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x13907){
return (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x13907))
;
x13907.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x13907){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x13907))
;
x13907.om$core$ISetState$ = true;
x13907.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x13907){
return (function (this$,val,render){var this$__$1 = this;var gstate = om.core.get_gstate.call(null,this$__$1);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);
if(cljs.core.truth_((function (){var and__3573__auto__ = !((gstate == null));if(and__3573__auto__)
{return render;
} else
{return and__3573__auto__;
}
})()))
{return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else
{return null;
}
});})(x13907))
;
x13907.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x13907){
return (function (this$,ks,val,render){var this$__$1 = this;return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x13907))
;
return x13907;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){if((function (){var G__13909 = x;if(G__13909)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13909.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__13909.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__13909);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__13909);
}
})())
{return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else
{return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2162591503;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))))
{return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else
{return not_found;
}
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.meta.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._count.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.value);
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.value) > (0)))
{return cljs.core.map.call(null,((function (this$__$1){
return (function (p__13911){var vec__13912 = p__13911;var k = cljs.core.nth.call(null,vec__13912,(0),null);var v = cljs.core.nth.call(null,vec__13912,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else
{return null;
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});
om.core.MapCursor.prototype.call = (function() {
var G__13913 = null;
var G__13913__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__13913__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__13913 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__13913__2.call(this,self__,k);
case 3:
return G__13913__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13913.cljs$core$IFn$_invoke$arity$2 = G__13913__2;
G__13913.cljs$core$IFn$_invoke$arity$3 = G__13913__3;
return G__13913;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args13910){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13910)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){return (new om.core.MapCursor(value,state,path));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2179375903;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,n,null);
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;return cljs.core._nth.call(null,this$__$1,n,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if((n < cljs.core._count.call(null,self__.value)))
{return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else
{return not_found;
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.meta.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._count.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.value);
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){var self__ = this;
var this$__$1 = this;return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if((cljs.core.count.call(null,self__.value) > (0)))
{return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else
{return null;
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});
om.core.IndexedCursor.prototype.call = (function() {
var G__13915 = null;
var G__13915__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__13915__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__13915 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__13915__2.call(this,self__,k);
case 3:
return G__13915__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13915.cljs$core$IFn$_invoke$arity$2 = G__13915__2;
G__13915.cljs$core$IFn$_invoke$arity$3 = G__13915__3;
return G__13915;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args13914){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13914)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x13917 = cljs.core.clone.call(null,val);x13917.cljs$core$IEquiv$ = true;
x13917.cljs$core$IEquiv$_equiv$arity$2 = ((function (x13917){
return (function (_,other){var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,val,other);
}
});})(x13917))
;
x13917.om$core$ITransact$ = true;
x13917.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x13917){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x13917))
;
x13917.om$core$ICursor$ = true;
x13917.om$core$ICursor$_path$arity$1 = ((function (x13917){
return (function (_){var ___$1 = this;return path;
});})(x13917))
;
x13917.om$core$ICursor$_state$arity$1 = ((function (x13917){
return (function (_){var ___$1 = this;return state;
});})(x13917))
;
x13917.cljs$core$IDeref$ = true;
x13917.cljs$core$IDeref$_deref$arity$1 = ((function (x13917){
return (function (this$){var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x13917))
;
return x13917;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_.call(null,val))
{return val;
} else
{if((function (){var G__13920 = val;if(G__13920)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13920.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__13920.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__13920);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__13920);
}
})())
{return om.core._to_cursor.call(null,val,state,path);
} else
{if(cljs.core.indexed_QMARK_.call(null,val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_.call(null,val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__13921 = val;if(G__13921)
{var bit__4249__auto__ = (G__13921.cljs$lang$protocol_mask$partition1$ & (8192));if((bit__4249__auto__) || (G__13921.cljs$core$ICloneable$))
{return true;
} else
{if((!G__13921.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__13921);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__13921);
}
})())
{return om.core.to_cursor_STAR_.call(null,val,state,path);
} else
{return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state.call(null,cursor);return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});
/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){var x13923 = cljs.core.clone.call(null,x);x13923.om$core$ITransact$ = true;
x13923.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x13923){
return (function (cursor,korks,f,tag){var cursor__$1 = this;om.core.commit_BANG_.call(null,cursor__$1,korks,f);
return om.core._refresh_deps_BANG_.call(null,parent);
});})(x13923))
;
x13923.om$core$ICursorDerive$ = true;
x13923.om$core$ICursorDerive$_derive$arity$4 = ((function (x13923){
return (function (this$,derived,state,path){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))
{return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x13923))
;
x13923.om$core$IAdapt$ = true;
x13923.om$core$IAdapt$_adapt$arity$2 = ((function (x13923){
return (function (this$,other){var this$__$1 = this;return ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x13923))
;
x13923.cljs$core$ICloneable$ = true;
x13923.cljs$core$ICloneable$_clone$arity$1 = ((function (x13923){
return (function (this$){var this$__$1 = this;return ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x13923))
;
return x13923;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){if((function (){var G__13930 = cursor;if(G__13930)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13930.om$core$IOmRef$;
}
})()))
{return true;
} else
{if((!G__13930.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__13930);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__13930);
}
})())
{return cursor;
} else
{var path = om.core.path.call(null,cursor);var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);var x13931 = cljs.core.clone.call(null,cursor);x13931.om$core$ITransact$ = true;
x13931.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x13931,path,storage){
return (function (cursor__$1,korks,f,tag){var cursor__$2 = this;om.core.commit_BANG_.call(null,cursor__$2,korks,f);
return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x13931,path,storage))
;
x13931.om$core$IOmRef$ = true;
x13931.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x13931,path,storage){
return (function (_,c){var ___$1 = this;return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x13931,path,storage))
;
x13931.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x13931,path,storage){
return (function (_,c){var ___$1 = this;var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));if((cljs.core.count.call(null,m) === (0)))
{return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else
{return null;
}
});})(x13931,path,storage))
;
x13931.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x13931,path,storage){
return (function (_){var ___$1 = this;var seq__13932 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));var chunk__13933 = null;var count__13934 = (0);var i__13935 = (0);while(true){
if((i__13935 < count__13934))
{var c = cljs.core._nth.call(null,chunk__13933,i__13935);om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);
{
var G__13936 = seq__13932;
var G__13937 = chunk__13933;
var G__13938 = count__13934;
var G__13939 = (i__13935 + (1));
seq__13932 = G__13936;
chunk__13933 = G__13937;
count__13934 = G__13938;
i__13935 = G__13939;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13932);if(temp__4126__auto__)
{var seq__13932__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13932__$1))
{var c__4355__auto__ = cljs.core.chunk_first.call(null,seq__13932__$1);{
var G__13940 = cljs.core.chunk_rest.call(null,seq__13932__$1);
var G__13941 = c__4355__auto__;
var G__13942 = cljs.core.count.call(null,c__4355__auto__);
var G__13943 = (0);
seq__13932 = G__13940;
chunk__13933 = G__13941;
count__13934 = G__13942;
i__13935 = G__13943;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__13932__$1);om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);
{
var G__13944 = cljs.core.next.call(null,seq__13932__$1);
var G__13945 = null;
var G__13946 = (0);
var G__13947 = (0);
seq__13932 = G__13944;
chunk__13933 = G__13945;
count__13934 = G__13946;
i__13935 = G__13947;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x13931,path,storage))
;
x13931.om$core$IOmRef$_get_deps$arity$1 = ((function (x13931,path,storage){
return (function (_){var ___$1 = this;return cljs.core.deref.call(null,storage);
});})(x13931,path,storage))
;
x13931.om$core$ICursorDerive$ = true;
x13931.om$core$ICursorDerive$_derive$arity$4 = ((function (x13931,path,storage){
return (function (this$,derived,state,path__$1){var this$__$1 = this;var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))
{return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else
{return cursor_SINGLEQUOTE_;
}
});})(x13931,path,storage))
;
return x13931;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){var state = c.state;var refs = (function (){var or__3585__auto__ = (state["__om_refs"]);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})();if(cljs.core.contains_QMARK_.call(null,refs,ref))
{return null;
} else
{return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){var state = c.state;var refs = (state["__om_refs"]);if(cljs.core.contains_QMARK_.call(null,refs,ref))
{return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else
{return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){om.core.add_ref_to_component_BANG_.call(null,c,ref);
om.core._add_dep_BANG_.call(null,ref,c);
return ref;
});
om.core.unobserve = (function unobserve(c,ref){om.core.remove_ref_from_component_BANG_.call(null,c,ref);
om.core._remove_dep_BANG_.call(null,ref,c);
return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function get_renderT(state){var or__3585__auto__ = state.om$render$T;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return (0);
}
});
om.core.render_all = (function render_all(state){om.core.refresh_queued = false;
var seq__13952_13956 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));var chunk__13953_13957 = null;var count__13954_13958 = (0);var i__13955_13959 = (0);while(true){
if((i__13955_13959 < count__13954_13958))
{var f_13960 = cljs.core._nth.call(null,chunk__13953_13957,i__13955_13959);f_13960.call(null);
{
var G__13961 = seq__13952_13956;
var G__13962 = chunk__13953_13957;
var G__13963 = count__13954_13958;
var G__13964 = (i__13955_13959 + (1));
seq__13952_13956 = G__13961;
chunk__13953_13957 = G__13962;
count__13954_13958 = G__13963;
i__13955_13959 = G__13964;
continue;
}
} else
{var temp__4126__auto___13965 = cljs.core.seq.call(null,seq__13952_13956);if(temp__4126__auto___13965)
{var seq__13952_13966__$1 = temp__4126__auto___13965;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13952_13966__$1))
{var c__4355__auto___13967 = cljs.core.chunk_first.call(null,seq__13952_13966__$1);{
var G__13968 = cljs.core.chunk_rest.call(null,seq__13952_13966__$1);
var G__13969 = c__4355__auto___13967;
var G__13970 = cljs.core.count.call(null,c__4355__auto___13967);
var G__13971 = (0);
seq__13952_13956 = G__13968;
chunk__13953_13957 = G__13969;
count__13954_13958 = G__13970;
i__13955_13959 = G__13971;
continue;
}
} else
{var f_13972 = cljs.core.first.call(null,seq__13952_13966__$1);f_13972.call(null);
{
var G__13973 = cljs.core.next.call(null,seq__13952_13966__$1);
var G__13974 = null;
var G__13975 = (0);
var G__13976 = (0);
seq__13952_13956 = G__13973;
chunk__13953_13957 = G__13974;
count__13954_13958 = G__13975;
i__13955_13959 = G__13976;
continue;
}
}
} else
{}
}
break;
}
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
});
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){if((function (){var or__3585__auto__ = (function (){var G__13983 = x;if(G__13983)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13983.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__13983.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__13983);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__13983);
}
})();if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (function (){var G__13985 = x;if(G__13985)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto____$1 = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto____$1))
{return or__3585__auto____$1;
} else
{return G__13985.om$core$IRenderProps$;
}
})()))
{return true;
} else
{if((!G__13985.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__13985);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__13985);
}
})();if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{var G__13986 = x;if(G__13986)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto____$2 = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto____$2))
{return or__3585__auto____$2;
} else
{return G__13986.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__13986.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__13986);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__13986);
}
}
}
})())
{return null;
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Invalid Om component fn, "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.name)+" does not return valid instance"))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))))));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){return get_descriptor.call(null,f,null);
});
var get_descriptor__2 = (function (f,descriptor){if(((f["om$descriptor"]) == null))
{(f["om$descriptor"] = React.createClass((function (){var or__3585__auto__ = descriptor;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = om.core._STAR_descriptor_STAR_;if(cljs.core.truth_(or__3585__auto____$1))
{return or__3585__auto____$1;
} else
{return om.core.pure_descriptor;
}
}
})()));
} else
{}
return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){if(om.core.valid_opts_QMARK_.call(null,m))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))));
}
if((m == null))
{var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);var ctor = om.core.get_descriptor.call(null,f);return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){var ret = f.call(null,cursor,this$);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else
{var map__13988 = m;var map__13988__$1 = ((cljs.core.seq_QMARK_.call(null,map__13988))?cljs.core.apply.call(null,cljs.core.hash_map,map__13988):map__13988);var opts = cljs.core.get.call(null,map__13988__$1,new cljs.core.Keyword(null,"opts","opts",155075701));var init_state = cljs.core.get.call(null,map__13988__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));var state = cljs.core.get.call(null,map__13988__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var key = cljs.core.get.call(null,map__13988__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;return dataf.call(null,cursor,i);
} else
{return dataf.call(null,cursor);
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348)));var shared = (function (){var or__3585__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();var ctor = om.core.get_descriptor.call(null,f,new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__13988,map__13988__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var ret = f.call(null,cursor_SINGLEQUOTE_,this$);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
});})(map__13988,map__13988__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__13988,map__13988__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);om.core.valid_component_QMARK_.call(null,ret,f);
return ret;
});})(map__13988,map__13988__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": rkey, "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){return build.call(null,f,x,null);
});
var build__3 = (function (f,x,m){if(!((om.core._STAR_instrument_STAR_ == null)))
{var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268)))
{return om.core.build_STAR_.call(null,f,x,m);
} else
{return ret;
}
} else
{return om.core.build_STAR_.call(null,f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.map.call(null,(function (x,i){return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__13997 = state;if(G__13997)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__13997.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__13997.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__13997);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__13997);
}
})())
{} else
{var properties_14005 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var listeners_14006 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var render_queue_14007 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var x13998_14008 = state;x13998_14008.om$core$IRenderQueue$ = true;
x13998_14008.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x13998_14008,properties_14005,listeners_14006,render_queue_14007){
return (function (this$){var this$__$1 = this;return cljs.core.deref.call(null,render_queue_14007);
});})(x13998_14008,properties_14005,listeners_14006,render_queue_14007))
;
x13998_14008.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x13998_14008,properties_14005,listeners_14006,render_queue_14007){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_14007),c))
{return null;
} else
{cljs.core.swap_BANG_.call(null,render_queue_14007,cljs.core.conj,c);
return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x13998_14008,properties_14005,listeners_14006,render_queue_14007))
;
x13998_14008.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x13998_14008,properties_14005,listeners_14006,render_queue_14007){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.call(null,render_queue_14007,cljs.core.empty);
});})(x13998_14008,properties_14005,listeners_14006,render_queue_14007))
;
x13998_14008.om$core$INotify$ = true;
x13998_14008.om$core$INotify$_listen_BANG_$arity$3 = ((function (x13998_14008,properties_14005,listeners_14006,render_queue_14007){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.call(null,listeners_14006,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x13998_14008,properties_14005,listeners_14006,render_queue_14007))
;
x13998_14008.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x13998_14008,properties_14005,listeners_14006,render_queue_14007){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.call(null,listeners_14006,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x13998_14008,properties_14005,listeners_14006,render_queue_14007))
;
x13998_14008.om$core$INotify$_notify_BANG_$arity$3 = ((function (x13998_14008,properties_14005,listeners_14006,render_queue_14007){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;var seq__13999_14009 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_14006));var chunk__14000_14010 = null;var count__14001_14011 = (0);var i__14002_14012 = (0);while(true){
if((i__14002_14012 < count__14001_14011))
{var vec__14003_14013 = cljs.core._nth.call(null,chunk__14000_14010,i__14002_14012);var __14014 = cljs.core.nth.call(null,vec__14003_14013,(0),null);var f_14015 = cljs.core.nth.call(null,vec__14003_14013,(1),null);f_14015.call(null,tx_data,root_cursor);
{
var G__14016 = seq__13999_14009;
var G__14017 = chunk__14000_14010;
var G__14018 = count__14001_14011;
var G__14019 = (i__14002_14012 + (1));
seq__13999_14009 = G__14016;
chunk__14000_14010 = G__14017;
count__14001_14011 = G__14018;
i__14002_14012 = G__14019;
continue;
}
} else
{var temp__4126__auto___14020 = cljs.core.seq.call(null,seq__13999_14009);if(temp__4126__auto___14020)
{var seq__13999_14021__$1 = temp__4126__auto___14020;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13999_14021__$1))
{var c__4355__auto___14022 = cljs.core.chunk_first.call(null,seq__13999_14021__$1);{
var G__14023 = cljs.core.chunk_rest.call(null,seq__13999_14021__$1);
var G__14024 = c__4355__auto___14022;
var G__14025 = cljs.core.count.call(null,c__4355__auto___14022);
var G__14026 = (0);
seq__13999_14009 = G__14023;
chunk__14000_14010 = G__14024;
count__14001_14011 = G__14025;
i__14002_14012 = G__14026;
continue;
}
} else
{var vec__14004_14027 = cljs.core.first.call(null,seq__13999_14021__$1);var __14028 = cljs.core.nth.call(null,vec__14004_14027,(0),null);var f_14029 = cljs.core.nth.call(null,vec__14004_14027,(1),null);f_14029.call(null,tx_data,root_cursor);
{
var G__14030 = cljs.core.next.call(null,seq__13999_14021__$1);
var G__14031 = null;
var G__14032 = (0);
var G__14033 = (0);
seq__13999_14009 = G__14030;
chunk__14000_14010 = G__14031;
count__14001_14011 = G__14032;
i__14002_14012 = G__14033;
continue;
}
}
} else
{}
}
break;
}
return this$__$1;
});})(x13998_14008,properties_14005,listeners_14006,render_queue_14007))
;
x13998_14008.om$core$IRootProperties$ = true;
x13998_14008.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x13998_14008,properties_14005,listeners_14006,render_queue_14007){
return (function (_,id,k,v){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_14005,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x13998_14008,properties_14005,listeners_14006,render_queue_14007))
;
x13998_14008.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x13998_14008,properties_14005,listeners_14006,render_queue_14007){
return (function (_,id,k){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_14005,cljs.core.dissoc,id,k);
});})(x13998_14008,properties_14005,listeners_14006,render_queue_14007))
;
x13998_14008.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x13998_14008,properties_14005,listeners_14006,render_queue_14007){
return (function (_,id){var ___$1 = this;return cljs.core.swap_BANG_.call(null,properties_14005,cljs.core.dissoc,id);
});})(x13998_14008,properties_14005,listeners_14006,render_queue_14007))
;
x13998_14008.om$core$IRootProperties$_get_property$arity$3 = ((function (x13998_14008,properties_14005,listeners_14006,render_queue_14007){
return (function (_,id,k){var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_14005),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x13998_14008,properties_14005,listeners_14006,render_queue_14007))
;
}
return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){if(om.core.cursor_QMARK_.call(null,cursor))
{var x14035 = cljs.core.clone.call(null,cursor);x14035.om$core$IRootKey$ = true;
x14035.om$core$IRootKey$_root_key$arity$1 = ((function (x14035){
return (function (this$){var this$__$1 = this;return root_key;
});})(x14035))
;
x14035.om$core$IAdapt$ = true;
x14035.om$core$IAdapt$_adapt$arity$2 = ((function (x14035){
return (function (this$,other){var this$__$1 = this;return tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x14035))
;
x14035.cljs$core$ICloneable$ = true;
x14035.cljs$core$ICloneable$_clone$arity$1 = ((function (x14035){
return (function (this$){var this$__$1 = this;return tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x14035))
;
return x14035;
} else
{return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__14036){var map__14099 = p__14036;var map__14099__$1 = ((cljs.core.seq_QMARK_.call(null,map__14099))?cljs.core.apply.call(null,cljs.core.hash_map,map__14099):map__14099);var options = map__14099__$1;var adapt = cljs.core.get.call(null,map__14099__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));var descriptor = cljs.core.get.call(null,map__14099__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));var instrument = cljs.core.get.call(null,map__14099__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));var path = cljs.core.get.call(null,map__14099__$1,new cljs.core.Keyword(null,"path","path",-188191168));var tx_listen = cljs.core.get.call(null,map__14099__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));var target = cljs.core.get.call(null,map__14099__$1,new cljs.core.Keyword(null,"target","target",253001721));if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))))));
}
var roots_SINGLEQUOTE__14161 = cljs.core.deref.call(null,om.core.roots);if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__14161,target))
{cljs.core.get.call(null,roots_SINGLEQUOTE__14161,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.call(null);var state = (((function (){var G__14100 = value;if(G__14100)
{var bit__4249__auto__ = (G__14100.cljs$lang$protocol_mask$partition1$ & (16384));if((bit__4249__auto__) || (G__14100.cljs$core$IAtom$))
{return true;
} else
{if((!G__14100.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__14100);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__14100);
}
})())?value:cljs.core.atom.call(null,value));var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);var adapt__$1 = (function (){var or__3585__auto__ = adapt;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.identity;
}
})();var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327));var ret = cljs.core.atom.call(null,null);var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__14099,map__14099__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = cljs.core.deref.call(null,state__$1);var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643))))
{} else
{var c_14162 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_14131 = om.core._STAR_descriptor_STAR_;var _STAR_instrument_STAR_14132 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_14133 = om.core._STAR_state_STAR_;var _STAR_root_key_STAR_14134 = om.core._STAR_root_key_STAR_;try{om.core._STAR_descriptor_STAR_ = descriptor;
om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
om.core._STAR_root_key_STAR_ = watch_key;
return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_14134;
om.core._STAR_state_STAR_ = _STAR_state_STAR_14133;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_14132;
om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_14131;
}})(),target);if((cljs.core.deref.call(null,ret) == null))
{cljs.core.reset_BANG_.call(null,ret,c_14162);
} else
{}
}
var queue_14163 = om.core._get_queue.call(null,state__$1);if(cljs.core.empty_QMARK_.call(null,queue_14163))
{} else
{var seq__14135_14164 = cljs.core.seq.call(null,queue_14163);var chunk__14136_14165 = null;var count__14137_14166 = (0);var i__14138_14167 = (0);while(true){
if((i__14138_14167 < count__14137_14166))
{var c_14168 = cljs.core._nth.call(null,chunk__14136_14165,i__14138_14167);if(cljs.core.truth_(c_14168.isMounted()))
{var temp__4126__auto___14169 = (c_14168.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___14169))
{var next_props_14170 = temp__4126__auto___14169;(c_14168.props["__om_cursor"] = next_props_14170);
(c_14168.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_((function (){var or__3585__auto__ = !((function (){var G__14140 = om.core.children.call(null,c_14168);if(G__14140)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__14140.om$core$ICheckState$;
}
})()))
{return true;
} else
{if((!G__14140.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__14140);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__14140);
}
})());if(or__3585__auto__)
{return or__3585__auto__;
} else
{return c_14168.shouldComponentUpdate(c_14168.props,c_14168.state);
}
})()))
{c_14168.forceUpdate();
} else
{}
} else
{}
{
var G__14171 = seq__14135_14164;
var G__14172 = chunk__14136_14165;
var G__14173 = count__14137_14166;
var G__14174 = (i__14138_14167 + (1));
seq__14135_14164 = G__14171;
chunk__14136_14165 = G__14172;
count__14137_14166 = G__14173;
i__14138_14167 = G__14174;
continue;
}
} else
{var temp__4126__auto___14175 = cljs.core.seq.call(null,seq__14135_14164);if(temp__4126__auto___14175)
{var seq__14135_14176__$1 = temp__4126__auto___14175;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14135_14176__$1))
{var c__4355__auto___14177 = cljs.core.chunk_first.call(null,seq__14135_14176__$1);{
var G__14178 = cljs.core.chunk_rest.call(null,seq__14135_14176__$1);
var G__14179 = c__4355__auto___14177;
var G__14180 = cljs.core.count.call(null,c__4355__auto___14177);
var G__14181 = (0);
seq__14135_14164 = G__14178;
chunk__14136_14165 = G__14179;
count__14137_14166 = G__14180;
i__14138_14167 = G__14181;
continue;
}
} else
{var c_14182 = cljs.core.first.call(null,seq__14135_14176__$1);if(cljs.core.truth_(c_14182.isMounted()))
{var temp__4126__auto___14183__$1 = (c_14182.state["__om_next_cursor"]);if(cljs.core.truth_(temp__4126__auto___14183__$1))
{var next_props_14184 = temp__4126__auto___14183__$1;(c_14182.props["__om_cursor"] = next_props_14184);
(c_14182.state["__om_next_cursor"] = null);
} else
{}
if(cljs.core.truth_((function (){var or__3585__auto__ = !((function (){var G__14142 = om.core.children.call(null,c_14182);if(G__14142)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__14142.om$core$ICheckState$;
}
})()))
{return true;
} else
{if((!G__14142.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__14142);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__14142);
}
})());if(or__3585__auto__)
{return or__3585__auto__;
} else
{return c_14182.shouldComponentUpdate(c_14182.props,c_14182.state);
}
})()))
{c_14182.forceUpdate();
} else
{}
} else
{}
{
var G__14185 = cljs.core.next.call(null,seq__14135_14176__$1);
var G__14186 = null;
var G__14187 = (0);
var G__14188 = (0);
seq__14135_14164 = G__14185;
chunk__14136_14165 = G__14186;
count__14137_14166 = G__14187;
i__14138_14167 = G__14188;
continue;
}
}
} else
{}
}
break;
}
om.core._empty_queue_BANG_.call(null,state__$1);
}
var _refs_14189 = cljs.core.deref.call(null,om.core._refs);if(cljs.core.empty_QMARK_.call(null,_refs_14189))
{} else
{var seq__14143_14190 = cljs.core.seq.call(null,_refs_14189);var chunk__14144_14191 = null;var count__14145_14192 = (0);var i__14146_14193 = (0);while(true){
if((i__14146_14193 < count__14145_14192))
{var vec__14147_14194 = cljs.core._nth.call(null,chunk__14144_14191,i__14146_14193);var path_14195__$1 = cljs.core.nth.call(null,vec__14147_14194,(0),null);var cs_14196 = cljs.core.nth.call(null,vec__14147_14194,(1),null);var cs_14197__$1 = cljs.core.deref.call(null,cs_14196);var seq__14148_14198 = cljs.core.seq.call(null,cs_14197__$1);var chunk__14149_14199 = null;var count__14150_14200 = (0);var i__14151_14201 = (0);while(true){
if((i__14151_14201 < count__14150_14200))
{var vec__14152_14202 = cljs.core._nth.call(null,chunk__14149_14199,i__14151_14201);var id_14203 = cljs.core.nth.call(null,vec__14152_14202,(0),null);var c_14204 = cljs.core.nth.call(null,vec__14152_14202,(1),null);if(cljs.core.truth_(c_14204.shouldComponentUpdate(c_14204.props,c_14204.state)))
{c_14204.forceUpdate();
} else
{}
{
var G__14205 = seq__14148_14198;
var G__14206 = chunk__14149_14199;
var G__14207 = count__14150_14200;
var G__14208 = (i__14151_14201 + (1));
seq__14148_14198 = G__14205;
chunk__14149_14199 = G__14206;
count__14150_14200 = G__14207;
i__14151_14201 = G__14208;
continue;
}
} else
{var temp__4126__auto___14209 = cljs.core.seq.call(null,seq__14148_14198);if(temp__4126__auto___14209)
{var seq__14148_14210__$1 = temp__4126__auto___14209;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14148_14210__$1))
{var c__4355__auto___14211 = cljs.core.chunk_first.call(null,seq__14148_14210__$1);{
var G__14212 = cljs.core.chunk_rest.call(null,seq__14148_14210__$1);
var G__14213 = c__4355__auto___14211;
var G__14214 = cljs.core.count.call(null,c__4355__auto___14211);
var G__14215 = (0);
seq__14148_14198 = G__14212;
chunk__14149_14199 = G__14213;
count__14150_14200 = G__14214;
i__14151_14201 = G__14215;
continue;
}
} else
{var vec__14153_14216 = cljs.core.first.call(null,seq__14148_14210__$1);var id_14217 = cljs.core.nth.call(null,vec__14153_14216,(0),null);var c_14218 = cljs.core.nth.call(null,vec__14153_14216,(1),null);if(cljs.core.truth_(c_14218.shouldComponentUpdate(c_14218.props,c_14218.state)))
{c_14218.forceUpdate();
} else
{}
{
var G__14219 = cljs.core.next.call(null,seq__14148_14210__$1);
var G__14220 = null;
var G__14221 = (0);
var G__14222 = (0);
seq__14148_14198 = G__14219;
chunk__14149_14199 = G__14220;
count__14150_14200 = G__14221;
i__14151_14201 = G__14222;
continue;
}
}
} else
{}
}
break;
}
{
var G__14223 = seq__14143_14190;
var G__14224 = chunk__14144_14191;
var G__14225 = count__14145_14192;
var G__14226 = (i__14146_14193 + (1));
seq__14143_14190 = G__14223;
chunk__14144_14191 = G__14224;
count__14145_14192 = G__14225;
i__14146_14193 = G__14226;
continue;
}
} else
{var temp__4126__auto___14227 = cljs.core.seq.call(null,seq__14143_14190);if(temp__4126__auto___14227)
{var seq__14143_14228__$1 = temp__4126__auto___14227;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14143_14228__$1))
{var c__4355__auto___14229 = cljs.core.chunk_first.call(null,seq__14143_14228__$1);{
var G__14230 = cljs.core.chunk_rest.call(null,seq__14143_14228__$1);
var G__14231 = c__4355__auto___14229;
var G__14232 = cljs.core.count.call(null,c__4355__auto___14229);
var G__14233 = (0);
seq__14143_14190 = G__14230;
chunk__14144_14191 = G__14231;
count__14145_14192 = G__14232;
i__14146_14193 = G__14233;
continue;
}
} else
{var vec__14154_14234 = cljs.core.first.call(null,seq__14143_14228__$1);var path_14235__$1 = cljs.core.nth.call(null,vec__14154_14234,(0),null);var cs_14236 = cljs.core.nth.call(null,vec__14154_14234,(1),null);var cs_14237__$1 = cljs.core.deref.call(null,cs_14236);var seq__14155_14238 = cljs.core.seq.call(null,cs_14237__$1);var chunk__14156_14239 = null;var count__14157_14240 = (0);var i__14158_14241 = (0);while(true){
if((i__14158_14241 < count__14157_14240))
{var vec__14159_14242 = cljs.core._nth.call(null,chunk__14156_14239,i__14158_14241);var id_14243 = cljs.core.nth.call(null,vec__14159_14242,(0),null);var c_14244 = cljs.core.nth.call(null,vec__14159_14242,(1),null);if(cljs.core.truth_(c_14244.shouldComponentUpdate(c_14244.props,c_14244.state)))
{c_14244.forceUpdate();
} else
{}
{
var G__14245 = seq__14155_14238;
var G__14246 = chunk__14156_14239;
var G__14247 = count__14157_14240;
var G__14248 = (i__14158_14241 + (1));
seq__14155_14238 = G__14245;
chunk__14156_14239 = G__14246;
count__14157_14240 = G__14247;
i__14158_14241 = G__14248;
continue;
}
} else
{var temp__4126__auto___14249__$1 = cljs.core.seq.call(null,seq__14155_14238);if(temp__4126__auto___14249__$1)
{var seq__14155_14250__$1 = temp__4126__auto___14249__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14155_14250__$1))
{var c__4355__auto___14251 = cljs.core.chunk_first.call(null,seq__14155_14250__$1);{
var G__14252 = cljs.core.chunk_rest.call(null,seq__14155_14250__$1);
var G__14253 = c__4355__auto___14251;
var G__14254 = cljs.core.count.call(null,c__4355__auto___14251);
var G__14255 = (0);
seq__14155_14238 = G__14252;
chunk__14156_14239 = G__14253;
count__14157_14240 = G__14254;
i__14158_14241 = G__14255;
continue;
}
} else
{var vec__14160_14256 = cljs.core.first.call(null,seq__14155_14250__$1);var id_14257 = cljs.core.nth.call(null,vec__14160_14256,(0),null);var c_14258 = cljs.core.nth.call(null,vec__14160_14256,(1),null);if(cljs.core.truth_(c_14258.shouldComponentUpdate(c_14258.props,c_14258.state)))
{c_14258.forceUpdate();
} else
{}
{
var G__14259 = cljs.core.next.call(null,seq__14155_14250__$1);
var G__14260 = null;
var G__14261 = (0);
var G__14262 = (0);
seq__14155_14238 = G__14259;
chunk__14156_14239 = G__14260;
count__14157_14240 = G__14261;
i__14158_14241 = G__14262;
continue;
}
}
} else
{}
}
break;
}
{
var G__14263 = cljs.core.next.call(null,seq__14143_14228__$1);
var G__14264 = null;
var G__14265 = (0);
var G__14266 = (0);
seq__14143_14190 = G__14263;
chunk__14144_14191 = G__14264;
count__14145_14192 = G__14265;
i__14146_14193 = G__14266;
continue;
}
}
} else
{}
}
break;
}
}
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);
return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__14099,map__14099__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
;cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14099,map__14099__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n))))
{om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else
{}
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf))
{} else
{cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14099,map__14099__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14099,map__14099__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
} else
{return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14099,map__14099__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14099,map__14099__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14099,map__14099__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14099,map__14099__$1,options,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){om.core._remove_properties_BANG_.call(null,state__$1,watch_key);
cljs.core.remove_watch.call(null,state__$1,watch_key);
om.core.tear_down.call(null,state__$1,watch_key);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);
return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__14099,map__14099__$1,options,adapt,descriptor,instrument,path,tx_listen,target))
);
return rootf.call(null);
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);if(cljs.core.truth_(temp__4126__auto__))
{var f = temp__4126__auto__;return f.call(null);
} else
{return null;
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){return om.core.transact_BANG_.call(null,cursor,korks,(function (_){return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){if(om.core.cursor_QMARK_.call(null,cursor))
{} else
{throw (new Error("First argument to commit! must be a cursor"));
}
var key = (((function (){var G__14268 = cursor;if(G__14268)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__14268.om$core$IRootKey$;
}
})()))
{return true;
} else
{if((!G__14268.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__14268);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__14268);
}
})())?om.core._root_key.call(null,cursor):null);var app_state = om.core.state.call(null,cursor);var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));var cpath = om.core.path.call(null,cursor);var rpath = cljs.core.into.call(null,cpath,korks__$1);if(cljs.core.truth_(key))
{om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else
{}
if(cljs.core.empty_QMARK_.call(null,rpath))
{return cljs.core.swap_BANG_.call(null,app_state,f);
} else
{return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){var temp__4126__auto__ = owner.refs;if(cljs.core.truth_(temp__4126__auto__))
{var refs = temp__4126__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.call(null,owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.call(null,owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_nr_BANG___3 = (function (owner,korks,f){return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_render_state.call(null,owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;

//# sourceMappingURL=core.js.map