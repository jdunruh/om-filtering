// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11014 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11014 = (function (f,fn_handler,meta11015){
this.f = f;
this.fn_handler = fn_handler;
this.meta11015 = meta11015;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11014.cljs$lang$type = true;
cljs.core.async.t11014.cljs$lang$ctorStr = "cljs.core.async/t11014";
cljs.core.async.t11014.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t11014");
});
cljs.core.async.t11014.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11014.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11014.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11016){var self__ = this;
var _11016__$1 = this;return self__.meta11015;
});
cljs.core.async.t11014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11016,meta11015__$1){var self__ = this;
var _11016__$1 = this;return (new cljs.core.async.t11014(self__.f,self__.fn_handler,meta11015__$1));
});
cljs.core.async.__GT_t11014 = (function __GT_t11014(f__$1,fn_handler__$1,meta11015){return (new cljs.core.async.t11014(f__$1,fn_handler__$1,meta11015));
});
}
return (new cljs.core.async.t11014(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11018 = buff;if(G__11018)
{var bit__4249__auto__ = null;if(cljs.core.truth_((function (){var or__3585__auto__ = bit__4249__auto__;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return G__11018.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11018.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11018);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11018);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11019 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11019);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11019,ret){
return (function (){return fn1.call(null,val_11019);
});})(val_11019,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4455__auto___11020 = n;var x_11021 = (0);while(true){
if((x_11021 < n__4455__auto___11020))
{(a[x_11021] = (0));
{
var G__11022 = (x_11021 + (1));
x_11021 = G__11022;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11023 = (i + (1));
i = G__11023;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11027 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11027 = (function (flag,alt_flag,meta11028){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11028 = meta11028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11027.cljs$lang$type = true;
cljs.core.async.t11027.cljs$lang$ctorStr = "cljs.core.async/t11027";
cljs.core.async.t11027.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t11027");
});})(flag))
;
cljs.core.async.t11027.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11029){var self__ = this;
var _11029__$1 = this;return self__.meta11028;
});})(flag))
;
cljs.core.async.t11027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11029,meta11028__$1){var self__ = this;
var _11029__$1 = this;return (new cljs.core.async.t11027(self__.flag,self__.alt_flag,meta11028__$1));
});})(flag))
;
cljs.core.async.__GT_t11027 = ((function (flag){
return (function __GT_t11027(flag__$1,alt_flag__$1,meta11028){return (new cljs.core.async.t11027(flag__$1,alt_flag__$1,meta11028));
});})(flag))
;
}
return (new cljs.core.async.t11027(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11033 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11033 = (function (cb,flag,alt_handler,meta11034){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11034 = meta11034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11033.cljs$lang$type = true;
cljs.core.async.t11033.cljs$lang$ctorStr = "cljs.core.async/t11033";
cljs.core.async.t11033.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t11033");
});
cljs.core.async.t11033.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11035){var self__ = this;
var _11035__$1 = this;return self__.meta11034;
});
cljs.core.async.t11033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11035,meta11034__$1){var self__ = this;
var _11035__$1 = this;return (new cljs.core.async.t11033(self__.cb,self__.flag,self__.alt_handler,meta11034__$1));
});
cljs.core.async.__GT_t11033 = (function __GT_t11033(cb__$1,flag__$1,alt_handler__$1,meta11034){return (new cljs.core.async.t11033(cb__$1,flag__$1,alt_handler__$1,meta11034));
});
}
return (new cljs.core.async.t11033(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11036_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11036_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11037_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11037_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3585__auto__ = wport;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11038 = (i + (1));
i = G__11038;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3585__auto__ = ret;if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3573__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3573__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3573__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11039){var map__11041 = p__11039;var map__11041__$1 = ((cljs.core.seq_QMARK_.call(null,map__11041))?cljs.core.apply.call(null,cljs.core.hash_map,map__11041):map__11041);var opts = map__11041__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__11039 = null;if (arguments.length > 1) {
  p__11039 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11039);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11042){
var ports = cljs.core.first(arglist__11042);
var p__11039 = cljs.core.rest(arglist__11042);
return alts_BANG___delegate(ports,p__11039);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11050 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11050 = (function (ch,f,map_LT_,meta11051){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11051 = meta11051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11050.cljs$lang$type = true;
cljs.core.async.t11050.cljs$lang$ctorStr = "cljs.core.async/t11050";
cljs.core.async.t11050.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t11050");
});
cljs.core.async.t11050.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11050.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11050.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11050.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11053 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11053 = (function (fn1,_,meta11051,ch,f,map_LT_,meta11054){
this.fn1 = fn1;
this._ = _;
this.meta11051 = meta11051;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11054 = meta11054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11053.cljs$lang$type = true;
cljs.core.async.t11053.cljs$lang$ctorStr = "cljs.core.async/t11053";
cljs.core.async.t11053.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t11053");
});})(___$1))
;
cljs.core.async.t11053.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11053.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11053.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11053.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11043_SHARP_){return f1.call(null,(((p1__11043_SHARP_ == null))?null:self__.f.call(null,p1__11043_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11053.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11055){var self__ = this;
var _11055__$1 = this;return self__.meta11054;
});})(___$1))
;
cljs.core.async.t11053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11055,meta11054__$1){var self__ = this;
var _11055__$1 = this;return (new cljs.core.async.t11053(self__.fn1,self__._,self__.meta11051,self__.ch,self__.f,self__.map_LT_,meta11054__$1));
});})(___$1))
;
cljs.core.async.__GT_t11053 = ((function (___$1){
return (function __GT_t11053(fn1__$1,___$2,meta11051__$1,ch__$2,f__$2,map_LT___$2,meta11054){return (new cljs.core.async.t11053(fn1__$1,___$2,meta11051__$1,ch__$2,f__$2,map_LT___$2,meta11054));
});})(___$1))
;
}
return (new cljs.core.async.t11053(fn1,___$1,self__.meta11051,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3573__auto__ = ret;if(cljs.core.truth_(and__3573__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3573__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11050.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11050.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11050.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11052){var self__ = this;
var _11052__$1 = this;return self__.meta11051;
});
cljs.core.async.t11050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11052,meta11051__$1){var self__ = this;
var _11052__$1 = this;return (new cljs.core.async.t11050(self__.ch,self__.f,self__.map_LT_,meta11051__$1));
});
cljs.core.async.__GT_t11050 = (function __GT_t11050(ch__$1,f__$1,map_LT___$1,meta11051){return (new cljs.core.async.t11050(ch__$1,f__$1,map_LT___$1,meta11051));
});
}
return (new cljs.core.async.t11050(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11059 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11059 = (function (ch,f,map_GT_,meta11060){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11060 = meta11060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11059.cljs$lang$type = true;
cljs.core.async.t11059.cljs$lang$ctorStr = "cljs.core.async/t11059";
cljs.core.async.t11059.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t11059");
});
cljs.core.async.t11059.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11059.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11059.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11059.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11059.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11059.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11061){var self__ = this;
var _11061__$1 = this;return self__.meta11060;
});
cljs.core.async.t11059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11061,meta11060__$1){var self__ = this;
var _11061__$1 = this;return (new cljs.core.async.t11059(self__.ch,self__.f,self__.map_GT_,meta11060__$1));
});
cljs.core.async.__GT_t11059 = (function __GT_t11059(ch__$1,f__$1,map_GT___$1,meta11060){return (new cljs.core.async.t11059(ch__$1,f__$1,map_GT___$1,meta11060));
});
}
return (new cljs.core.async.t11059(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11065 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11065 = (function (ch,p,filter_GT_,meta11066){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11066 = meta11066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11065.cljs$lang$type = true;
cljs.core.async.t11065.cljs$lang$ctorStr = "cljs.core.async/t11065";
cljs.core.async.t11065.cljs$lang$ctorPrWriter = (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t11065");
});
cljs.core.async.t11065.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11065.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11065.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11065.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11065.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11065.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11065.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11067){var self__ = this;
var _11067__$1 = this;return self__.meta11066;
});
cljs.core.async.t11065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11067,meta11066__$1){var self__ = this;
var _11067__$1 = this;return (new cljs.core.async.t11065(self__.ch,self__.p,self__.filter_GT_,meta11066__$1));
});
cljs.core.async.__GT_t11065 = (function __GT_t11065(ch__$1,p__$1,filter_GT___$1,meta11066){return (new cljs.core.async.t11065(ch__$1,p__$1,filter_GT___$1,meta11066));
});
}
return (new cljs.core.async.t11065(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6421__auto___11150 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___11150,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___11150,out){
return (function (state_11129){var state_val_11130 = (state_11129[(1)]);if((state_val_11130 === (7)))
{var inst_11125 = (state_11129[(2)]);var state_11129__$1 = state_11129;var statearr_11131_11151 = state_11129__$1;(statearr_11131_11151[(2)] = inst_11125);
(statearr_11131_11151[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11130 === (1)))
{var state_11129__$1 = state_11129;var statearr_11132_11152 = state_11129__$1;(statearr_11132_11152[(2)] = null);
(statearr_11132_11152[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11130 === (4)))
{var inst_11111 = (state_11129[(7)]);var inst_11111__$1 = (state_11129[(2)]);var inst_11112 = (inst_11111__$1 == null);var state_11129__$1 = (function (){var statearr_11133 = state_11129;(statearr_11133[(7)] = inst_11111__$1);
return statearr_11133;
})();if(cljs.core.truth_(inst_11112))
{var statearr_11134_11153 = state_11129__$1;(statearr_11134_11153[(1)] = (5));
} else
{var statearr_11135_11154 = state_11129__$1;(statearr_11135_11154[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11130 === (6)))
{var inst_11111 = (state_11129[(7)]);var inst_11116 = p.call(null,inst_11111);var state_11129__$1 = state_11129;if(cljs.core.truth_(inst_11116))
{var statearr_11136_11155 = state_11129__$1;(statearr_11136_11155[(1)] = (8));
} else
{var statearr_11137_11156 = state_11129__$1;(statearr_11137_11156[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11130 === (3)))
{var inst_11127 = (state_11129[(2)]);var state_11129__$1 = state_11129;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11129__$1,inst_11127);
} else
{if((state_val_11130 === (2)))
{var state_11129__$1 = state_11129;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11129__$1,(4),ch);
} else
{if((state_val_11130 === (11)))
{var inst_11119 = (state_11129[(2)]);var state_11129__$1 = state_11129;var statearr_11138_11157 = state_11129__$1;(statearr_11138_11157[(2)] = inst_11119);
(statearr_11138_11157[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11130 === (9)))
{var state_11129__$1 = state_11129;var statearr_11139_11158 = state_11129__$1;(statearr_11139_11158[(2)] = null);
(statearr_11139_11158[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11130 === (5)))
{var inst_11114 = cljs.core.async.close_BANG_.call(null,out);var state_11129__$1 = state_11129;var statearr_11140_11159 = state_11129__$1;(statearr_11140_11159[(2)] = inst_11114);
(statearr_11140_11159[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11130 === (10)))
{var inst_11122 = (state_11129[(2)]);var state_11129__$1 = (function (){var statearr_11141 = state_11129;(statearr_11141[(8)] = inst_11122);
return statearr_11141;
})();var statearr_11142_11160 = state_11129__$1;(statearr_11142_11160[(2)] = null);
(statearr_11142_11160[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11130 === (8)))
{var inst_11111 = (state_11129[(7)]);var state_11129__$1 = state_11129;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11129__$1,(11),out,inst_11111);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___11150,out))
;return ((function (switch__6406__auto__,c__6421__auto___11150,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_11146 = [null,null,null,null,null,null,null,null,null];(statearr_11146[(0)] = state_machine__6407__auto__);
(statearr_11146[(1)] = (1));
return statearr_11146;
});
var state_machine__6407__auto____1 = (function (state_11129){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_11129);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e11147){if((e11147 instanceof Object))
{var ex__6410__auto__ = e11147;var statearr_11148_11161 = state_11129;(statearr_11148_11161[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11129);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11147;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11162 = state_11129;
state_11129 = G__11162;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_11129){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_11129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___11150,out))
})();var state__6423__auto__ = (function (){var statearr_11149 = f__6422__auto__.call(null);(statearr_11149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___11150);
return statearr_11149;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___11150,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6421__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto__){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto__){
return (function (state_11328){var state_val_11329 = (state_11328[(1)]);if((state_val_11329 === (7)))
{var inst_11324 = (state_11328[(2)]);var state_11328__$1 = state_11328;var statearr_11330_11371 = state_11328__$1;(statearr_11330_11371[(2)] = inst_11324);
(statearr_11330_11371[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (20)))
{var inst_11294 = (state_11328[(7)]);var inst_11305 = (state_11328[(2)]);var inst_11306 = cljs.core.next.call(null,inst_11294);var inst_11280 = inst_11306;var inst_11281 = null;var inst_11282 = (0);var inst_11283 = (0);var state_11328__$1 = (function (){var statearr_11331 = state_11328;(statearr_11331[(8)] = inst_11280);
(statearr_11331[(9)] = inst_11305);
(statearr_11331[(10)] = inst_11281);
(statearr_11331[(11)] = inst_11283);
(statearr_11331[(12)] = inst_11282);
return statearr_11331;
})();var statearr_11332_11372 = state_11328__$1;(statearr_11332_11372[(2)] = null);
(statearr_11332_11372[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (1)))
{var state_11328__$1 = state_11328;var statearr_11333_11373 = state_11328__$1;(statearr_11333_11373[(2)] = null);
(statearr_11333_11373[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (4)))
{var inst_11269 = (state_11328[(13)]);var inst_11269__$1 = (state_11328[(2)]);var inst_11270 = (inst_11269__$1 == null);var state_11328__$1 = (function (){var statearr_11334 = state_11328;(statearr_11334[(13)] = inst_11269__$1);
return statearr_11334;
})();if(cljs.core.truth_(inst_11270))
{var statearr_11335_11374 = state_11328__$1;(statearr_11335_11374[(1)] = (5));
} else
{var statearr_11336_11375 = state_11328__$1;(statearr_11336_11375[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (15)))
{var state_11328__$1 = state_11328;var statearr_11340_11376 = state_11328__$1;(statearr_11340_11376[(2)] = null);
(statearr_11340_11376[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (21)))
{var state_11328__$1 = state_11328;var statearr_11341_11377 = state_11328__$1;(statearr_11341_11377[(2)] = null);
(statearr_11341_11377[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (13)))
{var inst_11280 = (state_11328[(8)]);var inst_11281 = (state_11328[(10)]);var inst_11283 = (state_11328[(11)]);var inst_11282 = (state_11328[(12)]);var inst_11290 = (state_11328[(2)]);var inst_11291 = (inst_11283 + (1));var tmp11337 = inst_11280;var tmp11338 = inst_11281;var tmp11339 = inst_11282;var inst_11280__$1 = tmp11337;var inst_11281__$1 = tmp11338;var inst_11282__$1 = tmp11339;var inst_11283__$1 = inst_11291;var state_11328__$1 = (function (){var statearr_11342 = state_11328;(statearr_11342[(8)] = inst_11280__$1);
(statearr_11342[(10)] = inst_11281__$1);
(statearr_11342[(14)] = inst_11290);
(statearr_11342[(11)] = inst_11283__$1);
(statearr_11342[(12)] = inst_11282__$1);
return statearr_11342;
})();var statearr_11343_11378 = state_11328__$1;(statearr_11343_11378[(2)] = null);
(statearr_11343_11378[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (22)))
{var state_11328__$1 = state_11328;var statearr_11344_11379 = state_11328__$1;(statearr_11344_11379[(2)] = null);
(statearr_11344_11379[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (6)))
{var inst_11269 = (state_11328[(13)]);var inst_11278 = f.call(null,inst_11269);var inst_11279 = cljs.core.seq.call(null,inst_11278);var inst_11280 = inst_11279;var inst_11281 = null;var inst_11282 = (0);var inst_11283 = (0);var state_11328__$1 = (function (){var statearr_11345 = state_11328;(statearr_11345[(8)] = inst_11280);
(statearr_11345[(10)] = inst_11281);
(statearr_11345[(11)] = inst_11283);
(statearr_11345[(12)] = inst_11282);
return statearr_11345;
})();var statearr_11346_11380 = state_11328__$1;(statearr_11346_11380[(2)] = null);
(statearr_11346_11380[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (17)))
{var inst_11294 = (state_11328[(7)]);var inst_11298 = cljs.core.chunk_first.call(null,inst_11294);var inst_11299 = cljs.core.chunk_rest.call(null,inst_11294);var inst_11300 = cljs.core.count.call(null,inst_11298);var inst_11280 = inst_11299;var inst_11281 = inst_11298;var inst_11282 = inst_11300;var inst_11283 = (0);var state_11328__$1 = (function (){var statearr_11347 = state_11328;(statearr_11347[(8)] = inst_11280);
(statearr_11347[(10)] = inst_11281);
(statearr_11347[(11)] = inst_11283);
(statearr_11347[(12)] = inst_11282);
return statearr_11347;
})();var statearr_11348_11381 = state_11328__$1;(statearr_11348_11381[(2)] = null);
(statearr_11348_11381[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (3)))
{var inst_11326 = (state_11328[(2)]);var state_11328__$1 = state_11328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11328__$1,inst_11326);
} else
{if((state_val_11329 === (12)))
{var inst_11314 = (state_11328[(2)]);var state_11328__$1 = state_11328;var statearr_11349_11382 = state_11328__$1;(statearr_11349_11382[(2)] = inst_11314);
(statearr_11349_11382[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (2)))
{var state_11328__$1 = state_11328;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11328__$1,(4),in$);
} else
{if((state_val_11329 === (23)))
{var inst_11322 = (state_11328[(2)]);var state_11328__$1 = state_11328;var statearr_11350_11383 = state_11328__$1;(statearr_11350_11383[(2)] = inst_11322);
(statearr_11350_11383[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (19)))
{var inst_11309 = (state_11328[(2)]);var state_11328__$1 = state_11328;var statearr_11351_11384 = state_11328__$1;(statearr_11351_11384[(2)] = inst_11309);
(statearr_11351_11384[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (11)))
{var inst_11280 = (state_11328[(8)]);var inst_11294 = (state_11328[(7)]);var inst_11294__$1 = cljs.core.seq.call(null,inst_11280);var state_11328__$1 = (function (){var statearr_11352 = state_11328;(statearr_11352[(7)] = inst_11294__$1);
return statearr_11352;
})();if(inst_11294__$1)
{var statearr_11353_11385 = state_11328__$1;(statearr_11353_11385[(1)] = (14));
} else
{var statearr_11354_11386 = state_11328__$1;(statearr_11354_11386[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (9)))
{var inst_11316 = (state_11328[(2)]);var inst_11317 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11328__$1 = (function (){var statearr_11355 = state_11328;(statearr_11355[(15)] = inst_11316);
return statearr_11355;
})();if(cljs.core.truth_(inst_11317))
{var statearr_11356_11387 = state_11328__$1;(statearr_11356_11387[(1)] = (21));
} else
{var statearr_11357_11388 = state_11328__$1;(statearr_11357_11388[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (5)))
{var inst_11272 = cljs.core.async.close_BANG_.call(null,out);var state_11328__$1 = state_11328;var statearr_11358_11389 = state_11328__$1;(statearr_11358_11389[(2)] = inst_11272);
(statearr_11358_11389[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (14)))
{var inst_11294 = (state_11328[(7)]);var inst_11296 = cljs.core.chunked_seq_QMARK_.call(null,inst_11294);var state_11328__$1 = state_11328;if(inst_11296)
{var statearr_11359_11390 = state_11328__$1;(statearr_11359_11390[(1)] = (17));
} else
{var statearr_11360_11391 = state_11328__$1;(statearr_11360_11391[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (16)))
{var inst_11312 = (state_11328[(2)]);var state_11328__$1 = state_11328;var statearr_11361_11392 = state_11328__$1;(statearr_11361_11392[(2)] = inst_11312);
(statearr_11361_11392[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11329 === (10)))
{var inst_11281 = (state_11328[(10)]);var inst_11283 = (state_11328[(11)]);var inst_11288 = cljs.core._nth.call(null,inst_11281,inst_11283);var state_11328__$1 = state_11328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11328__$1,(13),out,inst_11288);
} else
{if((state_val_11329 === (18)))
{var inst_11294 = (state_11328[(7)]);var inst_11303 = cljs.core.first.call(null,inst_11294);var state_11328__$1 = state_11328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11328__$1,(20),out,inst_11303);
} else
{if((state_val_11329 === (8)))
{var inst_11283 = (state_11328[(11)]);var inst_11282 = (state_11328[(12)]);var inst_11285 = (inst_11283 < inst_11282);var inst_11286 = inst_11285;var state_11328__$1 = state_11328;if(cljs.core.truth_(inst_11286))
{var statearr_11362_11393 = state_11328__$1;(statearr_11362_11393[(1)] = (10));
} else
{var statearr_11363_11394 = state_11328__$1;(statearr_11363_11394[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto__))
;return ((function (switch__6406__auto__,c__6421__auto__){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_11367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11367[(0)] = state_machine__6407__auto__);
(statearr_11367[(1)] = (1));
return statearr_11367;
});
var state_machine__6407__auto____1 = (function (state_11328){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_11328);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e11368){if((e11368 instanceof Object))
{var ex__6410__auto__ = e11368;var statearr_11369_11395 = state_11328;(statearr_11369_11395[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11328);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11368;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11396 = state_11328;
state_11328 = G__11396;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_11328){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_11328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto__))
})();var state__6423__auto__ = (function (){var statearr_11370 = f__6422__auto__.call(null);(statearr_11370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto__);
return statearr_11370;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto__))
);
return c__6421__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6421__auto___11491 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___11491){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___11491){
return (function (state_11467){var state_val_11468 = (state_11467[(1)]);if((state_val_11468 === (7)))
{var inst_11463 = (state_11467[(2)]);var state_11467__$1 = state_11467;var statearr_11469_11492 = state_11467__$1;(statearr_11469_11492[(2)] = inst_11463);
(statearr_11469_11492[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11468 === (1)))
{var state_11467__$1 = state_11467;var statearr_11470_11493 = state_11467__$1;(statearr_11470_11493[(2)] = null);
(statearr_11470_11493[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11468 === (4)))
{var inst_11446 = (state_11467[(7)]);var inst_11446__$1 = (state_11467[(2)]);var inst_11447 = (inst_11446__$1 == null);var state_11467__$1 = (function (){var statearr_11471 = state_11467;(statearr_11471[(7)] = inst_11446__$1);
return statearr_11471;
})();if(cljs.core.truth_(inst_11447))
{var statearr_11472_11494 = state_11467__$1;(statearr_11472_11494[(1)] = (5));
} else
{var statearr_11473_11495 = state_11467__$1;(statearr_11473_11495[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11468 === (13)))
{var state_11467__$1 = state_11467;var statearr_11474_11496 = state_11467__$1;(statearr_11474_11496[(2)] = null);
(statearr_11474_11496[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11468 === (6)))
{var inst_11446 = (state_11467[(7)]);var state_11467__$1 = state_11467;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11467__$1,(11),to,inst_11446);
} else
{if((state_val_11468 === (3)))
{var inst_11465 = (state_11467[(2)]);var state_11467__$1 = state_11467;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11467__$1,inst_11465);
} else
{if((state_val_11468 === (12)))
{var state_11467__$1 = state_11467;var statearr_11475_11497 = state_11467__$1;(statearr_11475_11497[(2)] = null);
(statearr_11475_11497[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11468 === (2)))
{var state_11467__$1 = state_11467;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11467__$1,(4),from);
} else
{if((state_val_11468 === (11)))
{var inst_11456 = (state_11467[(2)]);var state_11467__$1 = state_11467;if(cljs.core.truth_(inst_11456))
{var statearr_11476_11498 = state_11467__$1;(statearr_11476_11498[(1)] = (12));
} else
{var statearr_11477_11499 = state_11467__$1;(statearr_11477_11499[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11468 === (9)))
{var state_11467__$1 = state_11467;var statearr_11478_11500 = state_11467__$1;(statearr_11478_11500[(2)] = null);
(statearr_11478_11500[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11468 === (5)))
{var state_11467__$1 = state_11467;if(cljs.core.truth_(close_QMARK_))
{var statearr_11479_11501 = state_11467__$1;(statearr_11479_11501[(1)] = (8));
} else
{var statearr_11480_11502 = state_11467__$1;(statearr_11480_11502[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11468 === (14)))
{var inst_11461 = (state_11467[(2)]);var state_11467__$1 = state_11467;var statearr_11481_11503 = state_11467__$1;(statearr_11481_11503[(2)] = inst_11461);
(statearr_11481_11503[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11468 === (10)))
{var inst_11453 = (state_11467[(2)]);var state_11467__$1 = state_11467;var statearr_11482_11504 = state_11467__$1;(statearr_11482_11504[(2)] = inst_11453);
(statearr_11482_11504[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11468 === (8)))
{var inst_11450 = cljs.core.async.close_BANG_.call(null,to);var state_11467__$1 = state_11467;var statearr_11483_11505 = state_11467__$1;(statearr_11483_11505[(2)] = inst_11450);
(statearr_11483_11505[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___11491))
;return ((function (switch__6406__auto__,c__6421__auto___11491){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_11487 = [null,null,null,null,null,null,null,null];(statearr_11487[(0)] = state_machine__6407__auto__);
(statearr_11487[(1)] = (1));
return statearr_11487;
});
var state_machine__6407__auto____1 = (function (state_11467){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_11467);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e11488){if((e11488 instanceof Object))
{var ex__6410__auto__ = e11488;var statearr_11489_11506 = state_11467;(statearr_11489_11506[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11467);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11488;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11507 = state_11467;
state_11467 = G__11507;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_11467){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_11467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___11491))
})();var state__6423__auto__ = (function (){var statearr_11490 = f__6422__auto__.call(null);(statearr_11490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___11491);
return statearr_11490;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___11491))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6421__auto___11608 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___11608,tc,fc){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___11608,tc,fc){
return (function (state_11583){var state_val_11584 = (state_11583[(1)]);if((state_val_11584 === (7)))
{var inst_11579 = (state_11583[(2)]);var state_11583__$1 = state_11583;var statearr_11585_11609 = state_11583__$1;(statearr_11585_11609[(2)] = inst_11579);
(statearr_11585_11609[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (1)))
{var state_11583__$1 = state_11583;var statearr_11586_11610 = state_11583__$1;(statearr_11586_11610[(2)] = null);
(statearr_11586_11610[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (4)))
{var inst_11560 = (state_11583[(7)]);var inst_11560__$1 = (state_11583[(2)]);var inst_11561 = (inst_11560__$1 == null);var state_11583__$1 = (function (){var statearr_11587 = state_11583;(statearr_11587[(7)] = inst_11560__$1);
return statearr_11587;
})();if(cljs.core.truth_(inst_11561))
{var statearr_11588_11611 = state_11583__$1;(statearr_11588_11611[(1)] = (5));
} else
{var statearr_11589_11612 = state_11583__$1;(statearr_11589_11612[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (13)))
{var state_11583__$1 = state_11583;var statearr_11590_11613 = state_11583__$1;(statearr_11590_11613[(2)] = null);
(statearr_11590_11613[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (6)))
{var inst_11560 = (state_11583[(7)]);var inst_11566 = p.call(null,inst_11560);var state_11583__$1 = state_11583;if(cljs.core.truth_(inst_11566))
{var statearr_11591_11614 = state_11583__$1;(statearr_11591_11614[(1)] = (9));
} else
{var statearr_11592_11615 = state_11583__$1;(statearr_11592_11615[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (3)))
{var inst_11581 = (state_11583[(2)]);var state_11583__$1 = state_11583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11583__$1,inst_11581);
} else
{if((state_val_11584 === (12)))
{var state_11583__$1 = state_11583;var statearr_11593_11616 = state_11583__$1;(statearr_11593_11616[(2)] = null);
(statearr_11593_11616[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (2)))
{var state_11583__$1 = state_11583;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11583__$1,(4),ch);
} else
{if((state_val_11584 === (11)))
{var inst_11560 = (state_11583[(7)]);var inst_11570 = (state_11583[(2)]);var state_11583__$1 = state_11583;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11583__$1,(8),inst_11570,inst_11560);
} else
{if((state_val_11584 === (9)))
{var state_11583__$1 = state_11583;var statearr_11594_11617 = state_11583__$1;(statearr_11594_11617[(2)] = tc);
(statearr_11594_11617[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (5)))
{var inst_11563 = cljs.core.async.close_BANG_.call(null,tc);var inst_11564 = cljs.core.async.close_BANG_.call(null,fc);var state_11583__$1 = (function (){var statearr_11595 = state_11583;(statearr_11595[(8)] = inst_11563);
return statearr_11595;
})();var statearr_11596_11618 = state_11583__$1;(statearr_11596_11618[(2)] = inst_11564);
(statearr_11596_11618[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (14)))
{var inst_11577 = (state_11583[(2)]);var state_11583__$1 = state_11583;var statearr_11597_11619 = state_11583__$1;(statearr_11597_11619[(2)] = inst_11577);
(statearr_11597_11619[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (10)))
{var state_11583__$1 = state_11583;var statearr_11598_11620 = state_11583__$1;(statearr_11598_11620[(2)] = fc);
(statearr_11598_11620[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11584 === (8)))
{var inst_11572 = (state_11583[(2)]);var state_11583__$1 = state_11583;if(cljs.core.truth_(inst_11572))
{var statearr_11599_11621 = state_11583__$1;(statearr_11599_11621[(1)] = (12));
} else
{var statearr_11600_11622 = state_11583__$1;(statearr_11600_11622[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___11608,tc,fc))
;return ((function (switch__6406__auto__,c__6421__auto___11608,tc,fc){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_11604 = [null,null,null,null,null,null,null,null,null];(statearr_11604[(0)] = state_machine__6407__auto__);
(statearr_11604[(1)] = (1));
return statearr_11604;
});
var state_machine__6407__auto____1 = (function (state_11583){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_11583);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e11605){if((e11605 instanceof Object))
{var ex__6410__auto__ = e11605;var statearr_11606_11623 = state_11583;(statearr_11606_11623[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11583);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11605;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11624 = state_11583;
state_11583 = G__11624;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_11583){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_11583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___11608,tc,fc))
})();var state__6423__auto__ = (function (){var statearr_11607 = f__6422__auto__.call(null);(statearr_11607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___11608);
return statearr_11607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___11608,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6421__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto__){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto__){
return (function (state_11671){var state_val_11672 = (state_11671[(1)]);if((state_val_11672 === (7)))
{var inst_11667 = (state_11671[(2)]);var state_11671__$1 = state_11671;var statearr_11673_11689 = state_11671__$1;(statearr_11673_11689[(2)] = inst_11667);
(statearr_11673_11689[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11672 === (6)))
{var inst_11657 = (state_11671[(7)]);var inst_11660 = (state_11671[(8)]);var inst_11664 = f.call(null,inst_11657,inst_11660);var inst_11657__$1 = inst_11664;var state_11671__$1 = (function (){var statearr_11674 = state_11671;(statearr_11674[(7)] = inst_11657__$1);
return statearr_11674;
})();var statearr_11675_11690 = state_11671__$1;(statearr_11675_11690[(2)] = null);
(statearr_11675_11690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11672 === (5)))
{var inst_11657 = (state_11671[(7)]);var state_11671__$1 = state_11671;var statearr_11676_11691 = state_11671__$1;(statearr_11676_11691[(2)] = inst_11657);
(statearr_11676_11691[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11672 === (4)))
{var inst_11660 = (state_11671[(8)]);var inst_11660__$1 = (state_11671[(2)]);var inst_11661 = (inst_11660__$1 == null);var state_11671__$1 = (function (){var statearr_11677 = state_11671;(statearr_11677[(8)] = inst_11660__$1);
return statearr_11677;
})();if(cljs.core.truth_(inst_11661))
{var statearr_11678_11692 = state_11671__$1;(statearr_11678_11692[(1)] = (5));
} else
{var statearr_11679_11693 = state_11671__$1;(statearr_11679_11693[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11672 === (3)))
{var inst_11669 = (state_11671[(2)]);var state_11671__$1 = state_11671;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11671__$1,inst_11669);
} else
{if((state_val_11672 === (2)))
{var state_11671__$1 = state_11671;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11671__$1,(4),ch);
} else
{if((state_val_11672 === (1)))
{var inst_11657 = init;var state_11671__$1 = (function (){var statearr_11680 = state_11671;(statearr_11680[(7)] = inst_11657);
return statearr_11680;
})();var statearr_11681_11694 = state_11671__$1;(statearr_11681_11694[(2)] = null);
(statearr_11681_11694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6421__auto__))
;return ((function (switch__6406__auto__,c__6421__auto__){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_11685 = [null,null,null,null,null,null,null,null,null];(statearr_11685[(0)] = state_machine__6407__auto__);
(statearr_11685[(1)] = (1));
return statearr_11685;
});
var state_machine__6407__auto____1 = (function (state_11671){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_11671);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e11686){if((e11686 instanceof Object))
{var ex__6410__auto__ = e11686;var statearr_11687_11695 = state_11671;(statearr_11687_11695[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11671);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11686;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11696 = state_11671;
state_11671 = G__11696;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_11671){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_11671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto__))
})();var state__6423__auto__ = (function (){var statearr_11688 = f__6422__auto__.call(null);(statearr_11688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto__);
return statearr_11688;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto__))
);
return c__6421__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6421__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto__){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto__){
return (function (state_11770){var state_val_11771 = (state_11770[(1)]);if((state_val_11771 === (7)))
{var inst_11752 = (state_11770[(2)]);var state_11770__$1 = state_11770;var statearr_11772_11795 = state_11770__$1;(statearr_11772_11795[(2)] = inst_11752);
(statearr_11772_11795[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11771 === (1)))
{var inst_11746 = cljs.core.seq.call(null,coll);var inst_11747 = inst_11746;var state_11770__$1 = (function (){var statearr_11773 = state_11770;(statearr_11773[(7)] = inst_11747);
return statearr_11773;
})();var statearr_11774_11796 = state_11770__$1;(statearr_11774_11796[(2)] = null);
(statearr_11774_11796[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11771 === (4)))
{var inst_11747 = (state_11770[(7)]);var inst_11750 = cljs.core.first.call(null,inst_11747);var state_11770__$1 = state_11770;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11770__$1,(7),ch,inst_11750);
} else
{if((state_val_11771 === (13)))
{var inst_11764 = (state_11770[(2)]);var state_11770__$1 = state_11770;var statearr_11775_11797 = state_11770__$1;(statearr_11775_11797[(2)] = inst_11764);
(statearr_11775_11797[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11771 === (6)))
{var inst_11755 = (state_11770[(2)]);var state_11770__$1 = state_11770;if(cljs.core.truth_(inst_11755))
{var statearr_11776_11798 = state_11770__$1;(statearr_11776_11798[(1)] = (8));
} else
{var statearr_11777_11799 = state_11770__$1;(statearr_11777_11799[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11771 === (3)))
{var inst_11768 = (state_11770[(2)]);var state_11770__$1 = state_11770;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11770__$1,inst_11768);
} else
{if((state_val_11771 === (12)))
{var state_11770__$1 = state_11770;var statearr_11778_11800 = state_11770__$1;(statearr_11778_11800[(2)] = null);
(statearr_11778_11800[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11771 === (2)))
{var inst_11747 = (state_11770[(7)]);var state_11770__$1 = state_11770;if(cljs.core.truth_(inst_11747))
{var statearr_11779_11801 = state_11770__$1;(statearr_11779_11801[(1)] = (4));
} else
{var statearr_11780_11802 = state_11770__$1;(statearr_11780_11802[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11771 === (11)))
{var inst_11761 = cljs.core.async.close_BANG_.call(null,ch);var state_11770__$1 = state_11770;var statearr_11781_11803 = state_11770__$1;(statearr_11781_11803[(2)] = inst_11761);
(statearr_11781_11803[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11771 === (9)))
{var state_11770__$1 = state_11770;if(cljs.core.truth_(close_QMARK_))
{var statearr_11782_11804 = state_11770__$1;(statearr_11782_11804[(1)] = (11));
} else
{var statearr_11783_11805 = state_11770__$1;(statearr_11783_11805[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11771 === (5)))
{var inst_11747 = (state_11770[(7)]);var state_11770__$1 = state_11770;var statearr_11784_11806 = state_11770__$1;(statearr_11784_11806[(2)] = inst_11747);
(statearr_11784_11806[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11771 === (10)))
{var inst_11766 = (state_11770[(2)]);var state_11770__$1 = state_11770;var statearr_11785_11807 = state_11770__$1;(statearr_11785_11807[(2)] = inst_11766);
(statearr_11785_11807[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11771 === (8)))
{var inst_11747 = (state_11770[(7)]);var inst_11757 = cljs.core.next.call(null,inst_11747);var inst_11747__$1 = inst_11757;var state_11770__$1 = (function (){var statearr_11786 = state_11770;(statearr_11786[(7)] = inst_11747__$1);
return statearr_11786;
})();var statearr_11787_11808 = state_11770__$1;(statearr_11787_11808[(2)] = null);
(statearr_11787_11808[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto__))
;return ((function (switch__6406__auto__,c__6421__auto__){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_11791 = [null,null,null,null,null,null,null,null];(statearr_11791[(0)] = state_machine__6407__auto__);
(statearr_11791[(1)] = (1));
return statearr_11791;
});
var state_machine__6407__auto____1 = (function (state_11770){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_11770);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e11792){if((e11792 instanceof Object))
{var ex__6410__auto__ = e11792;var statearr_11793_11809 = state_11770;(statearr_11793_11809[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11770);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11792;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11810 = state_11770;
state_11770 = G__11810;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_11770){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_11770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto__))
})();var state__6423__auto__ = (function (){var statearr_11794 = f__6422__auto__.call(null);(statearr_11794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto__);
return statearr_11794;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto__))
);
return c__6421__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11812 = {};return obj11812;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3573__auto__ = _;if(and__3573__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4222__auto__ = (((_ == null))?null:_);return (function (){var or__3585__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11814 = {};return obj11814;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12036 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12036 = (function (cs,ch,mult,meta12037){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12037 = meta12037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12036.cljs$lang$type = true;
cljs.core.async.t12036.cljs$lang$ctorStr = "cljs.core.async/t12036";
cljs.core.async.t12036.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t12036");
});})(cs))
;
cljs.core.async.t12036.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12036.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12036.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12036.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12036.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12036.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12038){var self__ = this;
var _12038__$1 = this;return self__.meta12037;
});})(cs))
;
cljs.core.async.t12036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12038,meta12037__$1){var self__ = this;
var _12038__$1 = this;return (new cljs.core.async.t12036(self__.cs,self__.ch,self__.mult,meta12037__$1));
});})(cs))
;
cljs.core.async.__GT_t12036 = ((function (cs){
return (function __GT_t12036(cs__$1,ch__$1,mult__$1,meta12037){return (new cljs.core.async.t12036(cs__$1,ch__$1,mult__$1,meta12037));
});})(cs))
;
}
return (new cljs.core.async.t12036(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6421__auto___12257 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___12257,cs,m,dchan,dctr,done){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___12257,cs,m,dchan,dctr,done){
return (function (state_12169){var state_val_12170 = (state_12169[(1)]);if((state_val_12170 === (7)))
{var inst_12165 = (state_12169[(2)]);var state_12169__$1 = state_12169;var statearr_12171_12258 = state_12169__$1;(statearr_12171_12258[(2)] = inst_12165);
(statearr_12171_12258[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (20)))
{var inst_12070 = (state_12169[(7)]);var inst_12080 = cljs.core.first.call(null,inst_12070);var inst_12081 = cljs.core.nth.call(null,inst_12080,(0),null);var inst_12082 = cljs.core.nth.call(null,inst_12080,(1),null);var state_12169__$1 = (function (){var statearr_12172 = state_12169;(statearr_12172[(8)] = inst_12081);
return statearr_12172;
})();if(cljs.core.truth_(inst_12082))
{var statearr_12173_12259 = state_12169__$1;(statearr_12173_12259[(1)] = (22));
} else
{var statearr_12174_12260 = state_12169__$1;(statearr_12174_12260[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (27)))
{var inst_12110 = (state_12169[(9)]);var inst_12041 = (state_12169[(10)]);var inst_12117 = (state_12169[(11)]);var inst_12112 = (state_12169[(12)]);var inst_12117__$1 = cljs.core._nth.call(null,inst_12110,inst_12112);var inst_12118 = cljs.core.async.put_BANG_.call(null,inst_12117__$1,inst_12041,done);var state_12169__$1 = (function (){var statearr_12175 = state_12169;(statearr_12175[(11)] = inst_12117__$1);
return statearr_12175;
})();if(cljs.core.truth_(inst_12118))
{var statearr_12176_12261 = state_12169__$1;(statearr_12176_12261[(1)] = (30));
} else
{var statearr_12177_12262 = state_12169__$1;(statearr_12177_12262[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (1)))
{var state_12169__$1 = state_12169;var statearr_12178_12263 = state_12169__$1;(statearr_12178_12263[(2)] = null);
(statearr_12178_12263[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (24)))
{var inst_12070 = (state_12169[(7)]);var inst_12087 = (state_12169[(2)]);var inst_12088 = cljs.core.next.call(null,inst_12070);var inst_12050 = inst_12088;var inst_12051 = null;var inst_12052 = (0);var inst_12053 = (0);var state_12169__$1 = (function (){var statearr_12179 = state_12169;(statearr_12179[(13)] = inst_12087);
(statearr_12179[(14)] = inst_12050);
(statearr_12179[(15)] = inst_12053);
(statearr_12179[(16)] = inst_12052);
(statearr_12179[(17)] = inst_12051);
return statearr_12179;
})();var statearr_12180_12264 = state_12169__$1;(statearr_12180_12264[(2)] = null);
(statearr_12180_12264[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (39)))
{var state_12169__$1 = state_12169;var statearr_12184_12265 = state_12169__$1;(statearr_12184_12265[(2)] = null);
(statearr_12184_12265[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (4)))
{var inst_12041 = (state_12169[(10)]);var inst_12041__$1 = (state_12169[(2)]);var inst_12042 = (inst_12041__$1 == null);var state_12169__$1 = (function (){var statearr_12185 = state_12169;(statearr_12185[(10)] = inst_12041__$1);
return statearr_12185;
})();if(cljs.core.truth_(inst_12042))
{var statearr_12186_12266 = state_12169__$1;(statearr_12186_12266[(1)] = (5));
} else
{var statearr_12187_12267 = state_12169__$1;(statearr_12187_12267[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (15)))
{var inst_12050 = (state_12169[(14)]);var inst_12053 = (state_12169[(15)]);var inst_12052 = (state_12169[(16)]);var inst_12051 = (state_12169[(17)]);var inst_12066 = (state_12169[(2)]);var inst_12067 = (inst_12053 + (1));var tmp12181 = inst_12050;var tmp12182 = inst_12052;var tmp12183 = inst_12051;var inst_12050__$1 = tmp12181;var inst_12051__$1 = tmp12183;var inst_12052__$1 = tmp12182;var inst_12053__$1 = inst_12067;var state_12169__$1 = (function (){var statearr_12188 = state_12169;(statearr_12188[(14)] = inst_12050__$1);
(statearr_12188[(15)] = inst_12053__$1);
(statearr_12188[(16)] = inst_12052__$1);
(statearr_12188[(17)] = inst_12051__$1);
(statearr_12188[(18)] = inst_12066);
return statearr_12188;
})();var statearr_12189_12268 = state_12169__$1;(statearr_12189_12268[(2)] = null);
(statearr_12189_12268[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (21)))
{var inst_12091 = (state_12169[(2)]);var state_12169__$1 = state_12169;var statearr_12193_12269 = state_12169__$1;(statearr_12193_12269[(2)] = inst_12091);
(statearr_12193_12269[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (31)))
{var inst_12117 = (state_12169[(11)]);var inst_12121 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12122 = cljs.core.async.untap_STAR_.call(null,m,inst_12117);var state_12169__$1 = (function (){var statearr_12194 = state_12169;(statearr_12194[(19)] = inst_12121);
return statearr_12194;
})();var statearr_12195_12270 = state_12169__$1;(statearr_12195_12270[(2)] = inst_12122);
(statearr_12195_12270[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (32)))
{var inst_12110 = (state_12169[(9)]);var inst_12111 = (state_12169[(20)]);var inst_12112 = (state_12169[(12)]);var inst_12109 = (state_12169[(21)]);var inst_12124 = (state_12169[(2)]);var inst_12125 = (inst_12112 + (1));var tmp12190 = inst_12110;var tmp12191 = inst_12111;var tmp12192 = inst_12109;var inst_12109__$1 = tmp12192;var inst_12110__$1 = tmp12190;var inst_12111__$1 = tmp12191;var inst_12112__$1 = inst_12125;var state_12169__$1 = (function (){var statearr_12196 = state_12169;(statearr_12196[(9)] = inst_12110__$1);
(statearr_12196[(20)] = inst_12111__$1);
(statearr_12196[(12)] = inst_12112__$1);
(statearr_12196[(21)] = inst_12109__$1);
(statearr_12196[(22)] = inst_12124);
return statearr_12196;
})();var statearr_12197_12271 = state_12169__$1;(statearr_12197_12271[(2)] = null);
(statearr_12197_12271[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (40)))
{var inst_12137 = (state_12169[(23)]);var inst_12141 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12142 = cljs.core.async.untap_STAR_.call(null,m,inst_12137);var state_12169__$1 = (function (){var statearr_12198 = state_12169;(statearr_12198[(24)] = inst_12141);
return statearr_12198;
})();var statearr_12199_12272 = state_12169__$1;(statearr_12199_12272[(2)] = inst_12142);
(statearr_12199_12272[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (33)))
{var inst_12128 = (state_12169[(25)]);var inst_12130 = cljs.core.chunked_seq_QMARK_.call(null,inst_12128);var state_12169__$1 = state_12169;if(inst_12130)
{var statearr_12200_12273 = state_12169__$1;(statearr_12200_12273[(1)] = (36));
} else
{var statearr_12201_12274 = state_12169__$1;(statearr_12201_12274[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (13)))
{var inst_12060 = (state_12169[(26)]);var inst_12063 = cljs.core.async.close_BANG_.call(null,inst_12060);var state_12169__$1 = state_12169;var statearr_12202_12275 = state_12169__$1;(statearr_12202_12275[(2)] = inst_12063);
(statearr_12202_12275[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (22)))
{var inst_12081 = (state_12169[(8)]);var inst_12084 = cljs.core.async.close_BANG_.call(null,inst_12081);var state_12169__$1 = state_12169;var statearr_12203_12276 = state_12169__$1;(statearr_12203_12276[(2)] = inst_12084);
(statearr_12203_12276[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (36)))
{var inst_12128 = (state_12169[(25)]);var inst_12132 = cljs.core.chunk_first.call(null,inst_12128);var inst_12133 = cljs.core.chunk_rest.call(null,inst_12128);var inst_12134 = cljs.core.count.call(null,inst_12132);var inst_12109 = inst_12133;var inst_12110 = inst_12132;var inst_12111 = inst_12134;var inst_12112 = (0);var state_12169__$1 = (function (){var statearr_12204 = state_12169;(statearr_12204[(9)] = inst_12110);
(statearr_12204[(20)] = inst_12111);
(statearr_12204[(12)] = inst_12112);
(statearr_12204[(21)] = inst_12109);
return statearr_12204;
})();var statearr_12205_12277 = state_12169__$1;(statearr_12205_12277[(2)] = null);
(statearr_12205_12277[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (41)))
{var inst_12128 = (state_12169[(25)]);var inst_12144 = (state_12169[(2)]);var inst_12145 = cljs.core.next.call(null,inst_12128);var inst_12109 = inst_12145;var inst_12110 = null;var inst_12111 = (0);var inst_12112 = (0);var state_12169__$1 = (function (){var statearr_12206 = state_12169;(statearr_12206[(9)] = inst_12110);
(statearr_12206[(20)] = inst_12111);
(statearr_12206[(12)] = inst_12112);
(statearr_12206[(21)] = inst_12109);
(statearr_12206[(27)] = inst_12144);
return statearr_12206;
})();var statearr_12207_12278 = state_12169__$1;(statearr_12207_12278[(2)] = null);
(statearr_12207_12278[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (43)))
{var state_12169__$1 = state_12169;var statearr_12208_12279 = state_12169__$1;(statearr_12208_12279[(2)] = null);
(statearr_12208_12279[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (29)))
{var inst_12153 = (state_12169[(2)]);var state_12169__$1 = state_12169;var statearr_12209_12280 = state_12169__$1;(statearr_12209_12280[(2)] = inst_12153);
(statearr_12209_12280[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (44)))
{var inst_12162 = (state_12169[(2)]);var state_12169__$1 = (function (){var statearr_12210 = state_12169;(statearr_12210[(28)] = inst_12162);
return statearr_12210;
})();var statearr_12211_12281 = state_12169__$1;(statearr_12211_12281[(2)] = null);
(statearr_12211_12281[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (6)))
{var inst_12101 = (state_12169[(29)]);var inst_12100 = cljs.core.deref.call(null,cs);var inst_12101__$1 = cljs.core.keys.call(null,inst_12100);var inst_12102 = cljs.core.count.call(null,inst_12101__$1);var inst_12103 = cljs.core.reset_BANG_.call(null,dctr,inst_12102);var inst_12108 = cljs.core.seq.call(null,inst_12101__$1);var inst_12109 = inst_12108;var inst_12110 = null;var inst_12111 = (0);var inst_12112 = (0);var state_12169__$1 = (function (){var statearr_12212 = state_12169;(statearr_12212[(9)] = inst_12110);
(statearr_12212[(20)] = inst_12111);
(statearr_12212[(30)] = inst_12103);
(statearr_12212[(12)] = inst_12112);
(statearr_12212[(21)] = inst_12109);
(statearr_12212[(29)] = inst_12101__$1);
return statearr_12212;
})();var statearr_12213_12282 = state_12169__$1;(statearr_12213_12282[(2)] = null);
(statearr_12213_12282[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (28)))
{var inst_12128 = (state_12169[(25)]);var inst_12109 = (state_12169[(21)]);var inst_12128__$1 = cljs.core.seq.call(null,inst_12109);var state_12169__$1 = (function (){var statearr_12214 = state_12169;(statearr_12214[(25)] = inst_12128__$1);
return statearr_12214;
})();if(inst_12128__$1)
{var statearr_12215_12283 = state_12169__$1;(statearr_12215_12283[(1)] = (33));
} else
{var statearr_12216_12284 = state_12169__$1;(statearr_12216_12284[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (25)))
{var inst_12111 = (state_12169[(20)]);var inst_12112 = (state_12169[(12)]);var inst_12114 = (inst_12112 < inst_12111);var inst_12115 = inst_12114;var state_12169__$1 = state_12169;if(cljs.core.truth_(inst_12115))
{var statearr_12217_12285 = state_12169__$1;(statearr_12217_12285[(1)] = (27));
} else
{var statearr_12218_12286 = state_12169__$1;(statearr_12218_12286[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (34)))
{var state_12169__$1 = state_12169;var statearr_12219_12287 = state_12169__$1;(statearr_12219_12287[(2)] = null);
(statearr_12219_12287[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (17)))
{var state_12169__$1 = state_12169;var statearr_12220_12288 = state_12169__$1;(statearr_12220_12288[(2)] = null);
(statearr_12220_12288[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (3)))
{var inst_12167 = (state_12169[(2)]);var state_12169__$1 = state_12169;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12169__$1,inst_12167);
} else
{if((state_val_12170 === (12)))
{var inst_12096 = (state_12169[(2)]);var state_12169__$1 = state_12169;var statearr_12221_12289 = state_12169__$1;(statearr_12221_12289[(2)] = inst_12096);
(statearr_12221_12289[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (2)))
{var state_12169__$1 = state_12169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12169__$1,(4),ch);
} else
{if((state_val_12170 === (23)))
{var state_12169__$1 = state_12169;var statearr_12222_12290 = state_12169__$1;(statearr_12222_12290[(2)] = null);
(statearr_12222_12290[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (35)))
{var inst_12151 = (state_12169[(2)]);var state_12169__$1 = state_12169;var statearr_12223_12291 = state_12169__$1;(statearr_12223_12291[(2)] = inst_12151);
(statearr_12223_12291[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (19)))
{var inst_12070 = (state_12169[(7)]);var inst_12074 = cljs.core.chunk_first.call(null,inst_12070);var inst_12075 = cljs.core.chunk_rest.call(null,inst_12070);var inst_12076 = cljs.core.count.call(null,inst_12074);var inst_12050 = inst_12075;var inst_12051 = inst_12074;var inst_12052 = inst_12076;var inst_12053 = (0);var state_12169__$1 = (function (){var statearr_12224 = state_12169;(statearr_12224[(14)] = inst_12050);
(statearr_12224[(15)] = inst_12053);
(statearr_12224[(16)] = inst_12052);
(statearr_12224[(17)] = inst_12051);
return statearr_12224;
})();var statearr_12225_12292 = state_12169__$1;(statearr_12225_12292[(2)] = null);
(statearr_12225_12292[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (11)))
{var inst_12050 = (state_12169[(14)]);var inst_12070 = (state_12169[(7)]);var inst_12070__$1 = cljs.core.seq.call(null,inst_12050);var state_12169__$1 = (function (){var statearr_12226 = state_12169;(statearr_12226[(7)] = inst_12070__$1);
return statearr_12226;
})();if(inst_12070__$1)
{var statearr_12227_12293 = state_12169__$1;(statearr_12227_12293[(1)] = (16));
} else
{var statearr_12228_12294 = state_12169__$1;(statearr_12228_12294[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (9)))
{var inst_12098 = (state_12169[(2)]);var state_12169__$1 = state_12169;var statearr_12229_12295 = state_12169__$1;(statearr_12229_12295[(2)] = inst_12098);
(statearr_12229_12295[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (5)))
{var inst_12048 = cljs.core.deref.call(null,cs);var inst_12049 = cljs.core.seq.call(null,inst_12048);var inst_12050 = inst_12049;var inst_12051 = null;var inst_12052 = (0);var inst_12053 = (0);var state_12169__$1 = (function (){var statearr_12230 = state_12169;(statearr_12230[(14)] = inst_12050);
(statearr_12230[(15)] = inst_12053);
(statearr_12230[(16)] = inst_12052);
(statearr_12230[(17)] = inst_12051);
return statearr_12230;
})();var statearr_12231_12296 = state_12169__$1;(statearr_12231_12296[(2)] = null);
(statearr_12231_12296[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (14)))
{var state_12169__$1 = state_12169;var statearr_12232_12297 = state_12169__$1;(statearr_12232_12297[(2)] = null);
(statearr_12232_12297[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (45)))
{var inst_12159 = (state_12169[(2)]);var state_12169__$1 = state_12169;var statearr_12233_12298 = state_12169__$1;(statearr_12233_12298[(2)] = inst_12159);
(statearr_12233_12298[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (26)))
{var inst_12101 = (state_12169[(29)]);var inst_12155 = (state_12169[(2)]);var inst_12156 = cljs.core.seq.call(null,inst_12101);var state_12169__$1 = (function (){var statearr_12234 = state_12169;(statearr_12234[(31)] = inst_12155);
return statearr_12234;
})();if(inst_12156)
{var statearr_12235_12299 = state_12169__$1;(statearr_12235_12299[(1)] = (42));
} else
{var statearr_12236_12300 = state_12169__$1;(statearr_12236_12300[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (16)))
{var inst_12070 = (state_12169[(7)]);var inst_12072 = cljs.core.chunked_seq_QMARK_.call(null,inst_12070);var state_12169__$1 = state_12169;if(inst_12072)
{var statearr_12237_12301 = state_12169__$1;(statearr_12237_12301[(1)] = (19));
} else
{var statearr_12238_12302 = state_12169__$1;(statearr_12238_12302[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (38)))
{var inst_12148 = (state_12169[(2)]);var state_12169__$1 = state_12169;var statearr_12239_12303 = state_12169__$1;(statearr_12239_12303[(2)] = inst_12148);
(statearr_12239_12303[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (30)))
{var state_12169__$1 = state_12169;var statearr_12240_12304 = state_12169__$1;(statearr_12240_12304[(2)] = null);
(statearr_12240_12304[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (10)))
{var inst_12053 = (state_12169[(15)]);var inst_12051 = (state_12169[(17)]);var inst_12059 = cljs.core._nth.call(null,inst_12051,inst_12053);var inst_12060 = cljs.core.nth.call(null,inst_12059,(0),null);var inst_12061 = cljs.core.nth.call(null,inst_12059,(1),null);var state_12169__$1 = (function (){var statearr_12241 = state_12169;(statearr_12241[(26)] = inst_12060);
return statearr_12241;
})();if(cljs.core.truth_(inst_12061))
{var statearr_12242_12305 = state_12169__$1;(statearr_12242_12305[(1)] = (13));
} else
{var statearr_12243_12306 = state_12169__$1;(statearr_12243_12306[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (18)))
{var inst_12094 = (state_12169[(2)]);var state_12169__$1 = state_12169;var statearr_12244_12307 = state_12169__$1;(statearr_12244_12307[(2)] = inst_12094);
(statearr_12244_12307[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (42)))
{var state_12169__$1 = state_12169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12169__$1,(45),dchan);
} else
{if((state_val_12170 === (37)))
{var inst_12128 = (state_12169[(25)]);var inst_12041 = (state_12169[(10)]);var inst_12137 = (state_12169[(23)]);var inst_12137__$1 = cljs.core.first.call(null,inst_12128);var inst_12138 = cljs.core.async.put_BANG_.call(null,inst_12137__$1,inst_12041,done);var state_12169__$1 = (function (){var statearr_12245 = state_12169;(statearr_12245[(23)] = inst_12137__$1);
return statearr_12245;
})();if(cljs.core.truth_(inst_12138))
{var statearr_12246_12308 = state_12169__$1;(statearr_12246_12308[(1)] = (39));
} else
{var statearr_12247_12309 = state_12169__$1;(statearr_12247_12309[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12170 === (8)))
{var inst_12053 = (state_12169[(15)]);var inst_12052 = (state_12169[(16)]);var inst_12055 = (inst_12053 < inst_12052);var inst_12056 = inst_12055;var state_12169__$1 = state_12169;if(cljs.core.truth_(inst_12056))
{var statearr_12248_12310 = state_12169__$1;(statearr_12248_12310[(1)] = (10));
} else
{var statearr_12249_12311 = state_12169__$1;(statearr_12249_12311[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___12257,cs,m,dchan,dctr,done))
;return ((function (switch__6406__auto__,c__6421__auto___12257,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_12253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12253[(0)] = state_machine__6407__auto__);
(statearr_12253[(1)] = (1));
return statearr_12253;
});
var state_machine__6407__auto____1 = (function (state_12169){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_12169);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e12254){if((e12254 instanceof Object))
{var ex__6410__auto__ = e12254;var statearr_12255_12312 = state_12169;(statearr_12255_12312[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12169);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12254;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12313 = state_12169;
state_12169 = G__12313;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_12169){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_12169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___12257,cs,m,dchan,dctr,done))
})();var state__6423__auto__ = (function (){var statearr_12256 = f__6422__auto__.call(null);(statearr_12256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___12257);
return statearr_12256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___12257,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12315 = {};return obj12315;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3573__auto__ = m;if(and__3573__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4222__auto__ = (((m == null))?null:m);return (function (){var or__3585__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12435 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12435 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12436){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12436 = meta12436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12435.cljs$lang$type = true;
cljs.core.async.t12435.cljs$lang$ctorStr = "cljs.core.async/t12435";
cljs.core.async.t12435.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t12435");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12435.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12435.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12435.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12435.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12435.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12435.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12435.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12435.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12435.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12437){var self__ = this;
var _12437__$1 = this;return self__.meta12436;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12437,meta12436__$1){var self__ = this;
var _12437__$1 = this;return (new cljs.core.async.t12435(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12436__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12435 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12435(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12436){return (new cljs.core.async.t12435(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12436));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12435(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6421__auto___12554 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___12554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___12554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12507){var state_val_12508 = (state_12507[(1)]);if((state_val_12508 === (7)))
{var inst_12451 = (state_12507[(7)]);var inst_12456 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12451);var state_12507__$1 = state_12507;var statearr_12509_12555 = state_12507__$1;(statearr_12509_12555[(2)] = inst_12456);
(statearr_12509_12555[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (20)))
{var inst_12466 = (state_12507[(8)]);var state_12507__$1 = state_12507;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12507__$1,(23),out,inst_12466);
} else
{if((state_val_12508 === (1)))
{var inst_12441 = (state_12507[(9)]);var inst_12441__$1 = calc_state.call(null);var inst_12442 = cljs.core.seq_QMARK_.call(null,inst_12441__$1);var state_12507__$1 = (function (){var statearr_12510 = state_12507;(statearr_12510[(9)] = inst_12441__$1);
return statearr_12510;
})();if(inst_12442)
{var statearr_12511_12556 = state_12507__$1;(statearr_12511_12556[(1)] = (2));
} else
{var statearr_12512_12557 = state_12507__$1;(statearr_12512_12557[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (24)))
{var inst_12459 = (state_12507[(10)]);var inst_12451 = inst_12459;var state_12507__$1 = (function (){var statearr_12513 = state_12507;(statearr_12513[(7)] = inst_12451);
return statearr_12513;
})();var statearr_12514_12558 = state_12507__$1;(statearr_12514_12558[(2)] = null);
(statearr_12514_12558[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (4)))
{var inst_12441 = (state_12507[(9)]);var inst_12447 = (state_12507[(2)]);var inst_12448 = cljs.core.get.call(null,inst_12447,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12449 = cljs.core.get.call(null,inst_12447,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12450 = cljs.core.get.call(null,inst_12447,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12451 = inst_12441;var state_12507__$1 = (function (){var statearr_12515 = state_12507;(statearr_12515[(7)] = inst_12451);
(statearr_12515[(11)] = inst_12449);
(statearr_12515[(12)] = inst_12450);
(statearr_12515[(13)] = inst_12448);
return statearr_12515;
})();var statearr_12516_12559 = state_12507__$1;(statearr_12516_12559[(2)] = null);
(statearr_12516_12559[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (15)))
{var state_12507__$1 = state_12507;var statearr_12517_12560 = state_12507__$1;(statearr_12517_12560[(2)] = null);
(statearr_12517_12560[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (21)))
{var inst_12459 = (state_12507[(10)]);var inst_12451 = inst_12459;var state_12507__$1 = (function (){var statearr_12518 = state_12507;(statearr_12518[(7)] = inst_12451);
return statearr_12518;
})();var statearr_12519_12561 = state_12507__$1;(statearr_12519_12561[(2)] = null);
(statearr_12519_12561[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (13)))
{var inst_12503 = (state_12507[(2)]);var state_12507__$1 = state_12507;var statearr_12520_12562 = state_12507__$1;(statearr_12520_12562[(2)] = inst_12503);
(statearr_12520_12562[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (22)))
{var inst_12501 = (state_12507[(2)]);var state_12507__$1 = state_12507;var statearr_12521_12563 = state_12507__$1;(statearr_12521_12563[(2)] = inst_12501);
(statearr_12521_12563[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (6)))
{var inst_12505 = (state_12507[(2)]);var state_12507__$1 = state_12507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12507__$1,inst_12505);
} else
{if((state_val_12508 === (25)))
{var state_12507__$1 = state_12507;var statearr_12522_12564 = state_12507__$1;(statearr_12522_12564[(2)] = null);
(statearr_12522_12564[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (17)))
{var inst_12481 = (state_12507[(14)]);var state_12507__$1 = state_12507;var statearr_12523_12565 = state_12507__$1;(statearr_12523_12565[(2)] = inst_12481);
(statearr_12523_12565[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (3)))
{var inst_12441 = (state_12507[(9)]);var state_12507__$1 = state_12507;var statearr_12524_12566 = state_12507__$1;(statearr_12524_12566[(2)] = inst_12441);
(statearr_12524_12566[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (12)))
{var inst_12467 = (state_12507[(15)]);var inst_12462 = (state_12507[(16)]);var inst_12481 = (state_12507[(14)]);var inst_12481__$1 = inst_12462.call(null,inst_12467);var state_12507__$1 = (function (){var statearr_12525 = state_12507;(statearr_12525[(14)] = inst_12481__$1);
return statearr_12525;
})();if(cljs.core.truth_(inst_12481__$1))
{var statearr_12526_12567 = state_12507__$1;(statearr_12526_12567[(1)] = (17));
} else
{var statearr_12527_12568 = state_12507__$1;(statearr_12527_12568[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (2)))
{var inst_12441 = (state_12507[(9)]);var inst_12444 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12441);var state_12507__$1 = state_12507;var statearr_12528_12569 = state_12507__$1;(statearr_12528_12569[(2)] = inst_12444);
(statearr_12528_12569[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (23)))
{var inst_12492 = (state_12507[(2)]);var state_12507__$1 = state_12507;if(cljs.core.truth_(inst_12492))
{var statearr_12529_12570 = state_12507__$1;(statearr_12529_12570[(1)] = (24));
} else
{var statearr_12530_12571 = state_12507__$1;(statearr_12530_12571[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (19)))
{var inst_12489 = (state_12507[(2)]);var state_12507__$1 = state_12507;if(cljs.core.truth_(inst_12489))
{var statearr_12531_12572 = state_12507__$1;(statearr_12531_12572[(1)] = (20));
} else
{var statearr_12532_12573 = state_12507__$1;(statearr_12532_12573[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (11)))
{var inst_12466 = (state_12507[(8)]);var inst_12472 = (inst_12466 == null);var state_12507__$1 = state_12507;if(cljs.core.truth_(inst_12472))
{var statearr_12533_12574 = state_12507__$1;(statearr_12533_12574[(1)] = (14));
} else
{var statearr_12534_12575 = state_12507__$1;(statearr_12534_12575[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (9)))
{var inst_12459 = (state_12507[(10)]);var inst_12459__$1 = (state_12507[(2)]);var inst_12460 = cljs.core.get.call(null,inst_12459__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12461 = cljs.core.get.call(null,inst_12459__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12462 = cljs.core.get.call(null,inst_12459__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12507__$1 = (function (){var statearr_12535 = state_12507;(statearr_12535[(17)] = inst_12461);
(statearr_12535[(10)] = inst_12459__$1);
(statearr_12535[(16)] = inst_12462);
return statearr_12535;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12507__$1,(10),inst_12460);
} else
{if((state_val_12508 === (5)))
{var inst_12451 = (state_12507[(7)]);var inst_12454 = cljs.core.seq_QMARK_.call(null,inst_12451);var state_12507__$1 = state_12507;if(inst_12454)
{var statearr_12536_12576 = state_12507__$1;(statearr_12536_12576[(1)] = (7));
} else
{var statearr_12537_12577 = state_12507__$1;(statearr_12537_12577[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (14)))
{var inst_12467 = (state_12507[(15)]);var inst_12474 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12467);var state_12507__$1 = state_12507;var statearr_12538_12578 = state_12507__$1;(statearr_12538_12578[(2)] = inst_12474);
(statearr_12538_12578[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (26)))
{var inst_12497 = (state_12507[(2)]);var state_12507__$1 = state_12507;var statearr_12539_12579 = state_12507__$1;(statearr_12539_12579[(2)] = inst_12497);
(statearr_12539_12579[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (16)))
{var inst_12477 = (state_12507[(2)]);var inst_12478 = calc_state.call(null);var inst_12451 = inst_12478;var state_12507__$1 = (function (){var statearr_12540 = state_12507;(statearr_12540[(7)] = inst_12451);
(statearr_12540[(18)] = inst_12477);
return statearr_12540;
})();var statearr_12541_12580 = state_12507__$1;(statearr_12541_12580[(2)] = null);
(statearr_12541_12580[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (10)))
{var inst_12467 = (state_12507[(15)]);var inst_12466 = (state_12507[(8)]);var inst_12465 = (state_12507[(2)]);var inst_12466__$1 = cljs.core.nth.call(null,inst_12465,(0),null);var inst_12467__$1 = cljs.core.nth.call(null,inst_12465,(1),null);var inst_12468 = (inst_12466__$1 == null);var inst_12469 = cljs.core._EQ_.call(null,inst_12467__$1,change);var inst_12470 = (inst_12468) || (inst_12469);var state_12507__$1 = (function (){var statearr_12542 = state_12507;(statearr_12542[(15)] = inst_12467__$1);
(statearr_12542[(8)] = inst_12466__$1);
return statearr_12542;
})();if(cljs.core.truth_(inst_12470))
{var statearr_12543_12581 = state_12507__$1;(statearr_12543_12581[(1)] = (11));
} else
{var statearr_12544_12582 = state_12507__$1;(statearr_12544_12582[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (18)))
{var inst_12461 = (state_12507[(17)]);var inst_12467 = (state_12507[(15)]);var inst_12462 = (state_12507[(16)]);var inst_12484 = cljs.core.empty_QMARK_.call(null,inst_12462);var inst_12485 = inst_12461.call(null,inst_12467);var inst_12486 = cljs.core.not.call(null,inst_12485);var inst_12487 = (inst_12484) && (inst_12486);var state_12507__$1 = state_12507;var statearr_12545_12583 = state_12507__$1;(statearr_12545_12583[(2)] = inst_12487);
(statearr_12545_12583[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12508 === (8)))
{var inst_12451 = (state_12507[(7)]);var state_12507__$1 = state_12507;var statearr_12546_12584 = state_12507__$1;(statearr_12546_12584[(2)] = inst_12451);
(statearr_12546_12584[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___12554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6406__auto__,c__6421__auto___12554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_12550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12550[(0)] = state_machine__6407__auto__);
(statearr_12550[(1)] = (1));
return statearr_12550;
});
var state_machine__6407__auto____1 = (function (state_12507){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_12507);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e12551){if((e12551 instanceof Object))
{var ex__6410__auto__ = e12551;var statearr_12552_12585 = state_12507;(statearr_12552_12585[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12507);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12551;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12586 = state_12507;
state_12507 = G__12586;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_12507){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_12507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___12554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6423__auto__ = (function (){var statearr_12553 = f__6422__auto__.call(null);(statearr_12553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___12554);
return statearr_12553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___12554,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12588 = {};return obj12588;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3573__auto__ = p;if(and__3573__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3573__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4222__auto__ = (((p == null))?null:p);return (function (){var or__3585__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3573__auto__ = p;if(and__3573__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3573__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4222__auto__ = (((p == null))?null:p);return (function (){var or__3585__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3573__auto__ = p;if(and__3573__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3573__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4222__auto__ = (((p == null))?null:p);return (function (){var or__3585__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3573__auto__ = p;if(and__3573__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3573__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4222__auto__ = (((p == null))?null:p);return (function (){var or__3585__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4222__auto__)]);if(or__3585__auto__)
{return or__3585__auto__;
} else
{var or__3585__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3585__auto____$1)
{return or__3585__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3585__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3585__auto__))
{return or__3585__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3585__auto__,mults){
return (function (p1__12589_SHARP_){if(cljs.core.truth_(p1__12589_SHARP_.call(null,topic)))
{return p1__12589_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12589_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3585__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12704 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12704 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12705){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12705 = meta12705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12704.cljs$lang$type = true;
cljs.core.async.t12704.cljs$lang$ctorStr = "cljs.core.async/t12704";
cljs.core.async.t12704.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4162__auto__,writer__4163__auto__,opt__4164__auto__){return cljs.core._write.call(null,writer__4163__auto__,"cljs.core.async/t12704");
});})(mults,ensure_mult))
;
cljs.core.async.t12704.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12704.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12704.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12704.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12704.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12704.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12704.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12706){var self__ = this;
var _12706__$1 = this;return self__.meta12705;
});})(mults,ensure_mult))
;
cljs.core.async.t12704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12706,meta12705__$1){var self__ = this;
var _12706__$1 = this;return (new cljs.core.async.t12704(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12705__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12704 = ((function (mults,ensure_mult){
return (function __GT_t12704(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12705){return (new cljs.core.async.t12704(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12705));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12704(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6421__auto___12818 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___12818,mults,ensure_mult,p){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___12818,mults,ensure_mult,p){
return (function (state_12774){var state_val_12775 = (state_12774[(1)]);if((state_val_12775 === (7)))
{var inst_12770 = (state_12774[(2)]);var state_12774__$1 = state_12774;var statearr_12776_12819 = state_12774__$1;(statearr_12776_12819[(2)] = inst_12770);
(statearr_12776_12819[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (20)))
{var state_12774__$1 = state_12774;var statearr_12777_12820 = state_12774__$1;(statearr_12777_12820[(2)] = null);
(statearr_12777_12820[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (1)))
{var state_12774__$1 = state_12774;var statearr_12778_12821 = state_12774__$1;(statearr_12778_12821[(2)] = null);
(statearr_12778_12821[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (4)))
{var inst_12709 = (state_12774[(7)]);var inst_12709__$1 = (state_12774[(2)]);var inst_12710 = (inst_12709__$1 == null);var state_12774__$1 = (function (){var statearr_12779 = state_12774;(statearr_12779[(7)] = inst_12709__$1);
return statearr_12779;
})();if(cljs.core.truth_(inst_12710))
{var statearr_12780_12822 = state_12774__$1;(statearr_12780_12822[(1)] = (5));
} else
{var statearr_12781_12823 = state_12774__$1;(statearr_12781_12823[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (15)))
{var inst_12751 = (state_12774[(2)]);var state_12774__$1 = state_12774;var statearr_12782_12824 = state_12774__$1;(statearr_12782_12824[(2)] = inst_12751);
(statearr_12782_12824[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (21)))
{var inst_12757 = (state_12774[(8)]);var inst_12765 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12757);var state_12774__$1 = state_12774;var statearr_12783_12825 = state_12774__$1;(statearr_12783_12825[(2)] = inst_12765);
(statearr_12783_12825[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (13)))
{var inst_12733 = (state_12774[(9)]);var inst_12735 = cljs.core.chunked_seq_QMARK_.call(null,inst_12733);var state_12774__$1 = state_12774;if(inst_12735)
{var statearr_12784_12826 = state_12774__$1;(statearr_12784_12826[(1)] = (16));
} else
{var statearr_12785_12827 = state_12774__$1;(statearr_12785_12827[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (22)))
{var inst_12767 = (state_12774[(2)]);var state_12774__$1 = (function (){var statearr_12786 = state_12774;(statearr_12786[(10)] = inst_12767);
return statearr_12786;
})();var statearr_12787_12828 = state_12774__$1;(statearr_12787_12828[(2)] = null);
(statearr_12787_12828[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (6)))
{var inst_12709 = (state_12774[(7)]);var inst_12757 = (state_12774[(8)]);var inst_12757__$1 = topic_fn.call(null,inst_12709);var inst_12758 = cljs.core.deref.call(null,mults);var inst_12759 = cljs.core.get.call(null,inst_12758,inst_12757__$1);var inst_12760 = cljs.core.async.muxch_STAR_.call(null,inst_12759);var state_12774__$1 = (function (){var statearr_12788 = state_12774;(statearr_12788[(8)] = inst_12757__$1);
return statearr_12788;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12774__$1,(19),inst_12760,inst_12709);
} else
{if((state_val_12775 === (17)))
{var inst_12733 = (state_12774[(9)]);var inst_12742 = cljs.core.first.call(null,inst_12733);var inst_12743 = cljs.core.async.muxch_STAR_.call(null,inst_12742);var inst_12744 = cljs.core.async.close_BANG_.call(null,inst_12743);var inst_12745 = cljs.core.next.call(null,inst_12733);var inst_12719 = inst_12745;var inst_12720 = null;var inst_12721 = (0);var inst_12722 = (0);var state_12774__$1 = (function (){var statearr_12789 = state_12774;(statearr_12789[(11)] = inst_12722);
(statearr_12789[(12)] = inst_12721);
(statearr_12789[(13)] = inst_12719);
(statearr_12789[(14)] = inst_12720);
(statearr_12789[(15)] = inst_12744);
return statearr_12789;
})();var statearr_12790_12829 = state_12774__$1;(statearr_12790_12829[(2)] = null);
(statearr_12790_12829[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (3)))
{var inst_12772 = (state_12774[(2)]);var state_12774__$1 = state_12774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12774__$1,inst_12772);
} else
{if((state_val_12775 === (12)))
{var inst_12753 = (state_12774[(2)]);var state_12774__$1 = state_12774;var statearr_12791_12830 = state_12774__$1;(statearr_12791_12830[(2)] = inst_12753);
(statearr_12791_12830[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (2)))
{var state_12774__$1 = state_12774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12774__$1,(4),ch);
} else
{if((state_val_12775 === (19)))
{var inst_12762 = (state_12774[(2)]);var state_12774__$1 = state_12774;if(cljs.core.truth_(inst_12762))
{var statearr_12792_12831 = state_12774__$1;(statearr_12792_12831[(1)] = (20));
} else
{var statearr_12793_12832 = state_12774__$1;(statearr_12793_12832[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (11)))
{var inst_12719 = (state_12774[(13)]);var inst_12733 = (state_12774[(9)]);var inst_12733__$1 = cljs.core.seq.call(null,inst_12719);var state_12774__$1 = (function (){var statearr_12794 = state_12774;(statearr_12794[(9)] = inst_12733__$1);
return statearr_12794;
})();if(inst_12733__$1)
{var statearr_12795_12833 = state_12774__$1;(statearr_12795_12833[(1)] = (13));
} else
{var statearr_12796_12834 = state_12774__$1;(statearr_12796_12834[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (9)))
{var inst_12755 = (state_12774[(2)]);var state_12774__$1 = state_12774;var statearr_12797_12835 = state_12774__$1;(statearr_12797_12835[(2)] = inst_12755);
(statearr_12797_12835[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (5)))
{var inst_12716 = cljs.core.deref.call(null,mults);var inst_12717 = cljs.core.vals.call(null,inst_12716);var inst_12718 = cljs.core.seq.call(null,inst_12717);var inst_12719 = inst_12718;var inst_12720 = null;var inst_12721 = (0);var inst_12722 = (0);var state_12774__$1 = (function (){var statearr_12798 = state_12774;(statearr_12798[(11)] = inst_12722);
(statearr_12798[(12)] = inst_12721);
(statearr_12798[(13)] = inst_12719);
(statearr_12798[(14)] = inst_12720);
return statearr_12798;
})();var statearr_12799_12836 = state_12774__$1;(statearr_12799_12836[(2)] = null);
(statearr_12799_12836[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (14)))
{var state_12774__$1 = state_12774;var statearr_12803_12837 = state_12774__$1;(statearr_12803_12837[(2)] = null);
(statearr_12803_12837[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (16)))
{var inst_12733 = (state_12774[(9)]);var inst_12737 = cljs.core.chunk_first.call(null,inst_12733);var inst_12738 = cljs.core.chunk_rest.call(null,inst_12733);var inst_12739 = cljs.core.count.call(null,inst_12737);var inst_12719 = inst_12738;var inst_12720 = inst_12737;var inst_12721 = inst_12739;var inst_12722 = (0);var state_12774__$1 = (function (){var statearr_12804 = state_12774;(statearr_12804[(11)] = inst_12722);
(statearr_12804[(12)] = inst_12721);
(statearr_12804[(13)] = inst_12719);
(statearr_12804[(14)] = inst_12720);
return statearr_12804;
})();var statearr_12805_12838 = state_12774__$1;(statearr_12805_12838[(2)] = null);
(statearr_12805_12838[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (10)))
{var inst_12722 = (state_12774[(11)]);var inst_12721 = (state_12774[(12)]);var inst_12719 = (state_12774[(13)]);var inst_12720 = (state_12774[(14)]);var inst_12727 = cljs.core._nth.call(null,inst_12720,inst_12722);var inst_12728 = cljs.core.async.muxch_STAR_.call(null,inst_12727);var inst_12729 = cljs.core.async.close_BANG_.call(null,inst_12728);var inst_12730 = (inst_12722 + (1));var tmp12800 = inst_12721;var tmp12801 = inst_12719;var tmp12802 = inst_12720;var inst_12719__$1 = tmp12801;var inst_12720__$1 = tmp12802;var inst_12721__$1 = tmp12800;var inst_12722__$1 = inst_12730;var state_12774__$1 = (function (){var statearr_12806 = state_12774;(statearr_12806[(11)] = inst_12722__$1);
(statearr_12806[(12)] = inst_12721__$1);
(statearr_12806[(13)] = inst_12719__$1);
(statearr_12806[(16)] = inst_12729);
(statearr_12806[(14)] = inst_12720__$1);
return statearr_12806;
})();var statearr_12807_12839 = state_12774__$1;(statearr_12807_12839[(2)] = null);
(statearr_12807_12839[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (18)))
{var inst_12748 = (state_12774[(2)]);var state_12774__$1 = state_12774;var statearr_12808_12840 = state_12774__$1;(statearr_12808_12840[(2)] = inst_12748);
(statearr_12808_12840[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12775 === (8)))
{var inst_12722 = (state_12774[(11)]);var inst_12721 = (state_12774[(12)]);var inst_12724 = (inst_12722 < inst_12721);var inst_12725 = inst_12724;var state_12774__$1 = state_12774;if(cljs.core.truth_(inst_12725))
{var statearr_12809_12841 = state_12774__$1;(statearr_12809_12841[(1)] = (10));
} else
{var statearr_12810_12842 = state_12774__$1;(statearr_12810_12842[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___12818,mults,ensure_mult,p))
;return ((function (switch__6406__auto__,c__6421__auto___12818,mults,ensure_mult,p){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_12814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12814[(0)] = state_machine__6407__auto__);
(statearr_12814[(1)] = (1));
return statearr_12814;
});
var state_machine__6407__auto____1 = (function (state_12774){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_12774);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e12815){if((e12815 instanceof Object))
{var ex__6410__auto__ = e12815;var statearr_12816_12843 = state_12774;(statearr_12816_12843[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12774);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12815;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12844 = state_12774;
state_12774 = G__12844;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_12774){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_12774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___12818,mults,ensure_mult,p))
})();var state__6423__auto__ = (function (){var statearr_12817 = f__6422__auto__.call(null);(statearr_12817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___12818);
return statearr_12817;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___12818,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6421__auto___12981 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___12981,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___12981,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12951){var state_val_12952 = (state_12951[(1)]);if((state_val_12952 === (7)))
{var state_12951__$1 = state_12951;var statearr_12953_12982 = state_12951__$1;(statearr_12953_12982[(2)] = null);
(statearr_12953_12982[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (1)))
{var state_12951__$1 = state_12951;var statearr_12954_12983 = state_12951__$1;(statearr_12954_12983[(2)] = null);
(statearr_12954_12983[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (4)))
{var inst_12915 = (state_12951[(7)]);var inst_12917 = (inst_12915 < cnt);var state_12951__$1 = state_12951;if(cljs.core.truth_(inst_12917))
{var statearr_12955_12984 = state_12951__$1;(statearr_12955_12984[(1)] = (6));
} else
{var statearr_12956_12985 = state_12951__$1;(statearr_12956_12985[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (15)))
{var inst_12947 = (state_12951[(2)]);var state_12951__$1 = state_12951;var statearr_12957_12986 = state_12951__$1;(statearr_12957_12986[(2)] = inst_12947);
(statearr_12957_12986[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (13)))
{var inst_12940 = cljs.core.async.close_BANG_.call(null,out);var state_12951__$1 = state_12951;var statearr_12958_12987 = state_12951__$1;(statearr_12958_12987[(2)] = inst_12940);
(statearr_12958_12987[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (6)))
{var state_12951__$1 = state_12951;var statearr_12959_12988 = state_12951__$1;(statearr_12959_12988[(2)] = null);
(statearr_12959_12988[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (3)))
{var inst_12949 = (state_12951[(2)]);var state_12951__$1 = state_12951;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12951__$1,inst_12949);
} else
{if((state_val_12952 === (12)))
{var inst_12937 = (state_12951[(8)]);var inst_12937__$1 = (state_12951[(2)]);var inst_12938 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12937__$1);var state_12951__$1 = (function (){var statearr_12960 = state_12951;(statearr_12960[(8)] = inst_12937__$1);
return statearr_12960;
})();if(cljs.core.truth_(inst_12938))
{var statearr_12961_12989 = state_12951__$1;(statearr_12961_12989[(1)] = (13));
} else
{var statearr_12962_12990 = state_12951__$1;(statearr_12962_12990[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (2)))
{var inst_12914 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12915 = (0);var state_12951__$1 = (function (){var statearr_12963 = state_12951;(statearr_12963[(7)] = inst_12915);
(statearr_12963[(9)] = inst_12914);
return statearr_12963;
})();var statearr_12964_12991 = state_12951__$1;(statearr_12964_12991[(2)] = null);
(statearr_12964_12991[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (11)))
{var inst_12915 = (state_12951[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12951,(10),Object,null,(9));var inst_12924 = chs__$1.call(null,inst_12915);var inst_12925 = done.call(null,inst_12915);var inst_12926 = cljs.core.async.take_BANG_.call(null,inst_12924,inst_12925);var state_12951__$1 = state_12951;var statearr_12965_12992 = state_12951__$1;(statearr_12965_12992[(2)] = inst_12926);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12951__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (9)))
{var inst_12915 = (state_12951[(7)]);var inst_12928 = (state_12951[(2)]);var inst_12929 = (inst_12915 + (1));var inst_12915__$1 = inst_12929;var state_12951__$1 = (function (){var statearr_12966 = state_12951;(statearr_12966[(10)] = inst_12928);
(statearr_12966[(7)] = inst_12915__$1);
return statearr_12966;
})();var statearr_12967_12993 = state_12951__$1;(statearr_12967_12993[(2)] = null);
(statearr_12967_12993[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (5)))
{var inst_12935 = (state_12951[(2)]);var state_12951__$1 = (function (){var statearr_12968 = state_12951;(statearr_12968[(11)] = inst_12935);
return statearr_12968;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12951__$1,(12),dchan);
} else
{if((state_val_12952 === (14)))
{var inst_12937 = (state_12951[(8)]);var inst_12942 = cljs.core.apply.call(null,f,inst_12937);var state_12951__$1 = state_12951;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12951__$1,(16),out,inst_12942);
} else
{if((state_val_12952 === (16)))
{var inst_12944 = (state_12951[(2)]);var state_12951__$1 = (function (){var statearr_12969 = state_12951;(statearr_12969[(12)] = inst_12944);
return statearr_12969;
})();var statearr_12970_12994 = state_12951__$1;(statearr_12970_12994[(2)] = null);
(statearr_12970_12994[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (10)))
{var inst_12919 = (state_12951[(2)]);var inst_12920 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12951__$1 = (function (){var statearr_12971 = state_12951;(statearr_12971[(13)] = inst_12919);
return statearr_12971;
})();var statearr_12972_12995 = state_12951__$1;(statearr_12972_12995[(2)] = inst_12920);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12951__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12952 === (8)))
{var inst_12933 = (state_12951[(2)]);var state_12951__$1 = state_12951;var statearr_12973_12996 = state_12951__$1;(statearr_12973_12996[(2)] = inst_12933);
(statearr_12973_12996[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___12981,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6406__auto__,c__6421__auto___12981,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_12977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12977[(0)] = state_machine__6407__auto__);
(statearr_12977[(1)] = (1));
return statearr_12977;
});
var state_machine__6407__auto____1 = (function (state_12951){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_12951);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e12978){if((e12978 instanceof Object))
{var ex__6410__auto__ = e12978;var statearr_12979_12997 = state_12951;(statearr_12979_12997[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12951);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12978;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12998 = state_12951;
state_12951 = G__12998;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_12951){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_12951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___12981,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6423__auto__ = (function (){var statearr_12980 = f__6422__auto__.call(null);(statearr_12980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___12981);
return statearr_12980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___12981,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6421__auto___13106 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___13106,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___13106,out){
return (function (state_13082){var state_val_13083 = (state_13082[(1)]);if((state_val_13083 === (7)))
{var inst_13061 = (state_13082[(7)]);var inst_13062 = (state_13082[(8)]);var inst_13061__$1 = (state_13082[(2)]);var inst_13062__$1 = cljs.core.nth.call(null,inst_13061__$1,(0),null);var inst_13063 = cljs.core.nth.call(null,inst_13061__$1,(1),null);var inst_13064 = (inst_13062__$1 == null);var state_13082__$1 = (function (){var statearr_13084 = state_13082;(statearr_13084[(9)] = inst_13063);
(statearr_13084[(7)] = inst_13061__$1);
(statearr_13084[(8)] = inst_13062__$1);
return statearr_13084;
})();if(cljs.core.truth_(inst_13064))
{var statearr_13085_13107 = state_13082__$1;(statearr_13085_13107[(1)] = (8));
} else
{var statearr_13086_13108 = state_13082__$1;(statearr_13086_13108[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13083 === (1)))
{var inst_13053 = cljs.core.vec.call(null,chs);var inst_13054 = inst_13053;var state_13082__$1 = (function (){var statearr_13087 = state_13082;(statearr_13087[(10)] = inst_13054);
return statearr_13087;
})();var statearr_13088_13109 = state_13082__$1;(statearr_13088_13109[(2)] = null);
(statearr_13088_13109[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13083 === (4)))
{var inst_13054 = (state_13082[(10)]);var state_13082__$1 = state_13082;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13082__$1,(7),inst_13054);
} else
{if((state_val_13083 === (6)))
{var inst_13078 = (state_13082[(2)]);var state_13082__$1 = state_13082;var statearr_13089_13110 = state_13082__$1;(statearr_13089_13110[(2)] = inst_13078);
(statearr_13089_13110[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13083 === (3)))
{var inst_13080 = (state_13082[(2)]);var state_13082__$1 = state_13082;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13082__$1,inst_13080);
} else
{if((state_val_13083 === (2)))
{var inst_13054 = (state_13082[(10)]);var inst_13056 = cljs.core.count.call(null,inst_13054);var inst_13057 = (inst_13056 > (0));var state_13082__$1 = state_13082;if(cljs.core.truth_(inst_13057))
{var statearr_13091_13111 = state_13082__$1;(statearr_13091_13111[(1)] = (4));
} else
{var statearr_13092_13112 = state_13082__$1;(statearr_13092_13112[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13083 === (11)))
{var inst_13054 = (state_13082[(10)]);var inst_13071 = (state_13082[(2)]);var tmp13090 = inst_13054;var inst_13054__$1 = tmp13090;var state_13082__$1 = (function (){var statearr_13093 = state_13082;(statearr_13093[(11)] = inst_13071);
(statearr_13093[(10)] = inst_13054__$1);
return statearr_13093;
})();var statearr_13094_13113 = state_13082__$1;(statearr_13094_13113[(2)] = null);
(statearr_13094_13113[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13083 === (9)))
{var inst_13062 = (state_13082[(8)]);var state_13082__$1 = state_13082;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13082__$1,(11),out,inst_13062);
} else
{if((state_val_13083 === (5)))
{var inst_13076 = cljs.core.async.close_BANG_.call(null,out);var state_13082__$1 = state_13082;var statearr_13095_13114 = state_13082__$1;(statearr_13095_13114[(2)] = inst_13076);
(statearr_13095_13114[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13083 === (10)))
{var inst_13074 = (state_13082[(2)]);var state_13082__$1 = state_13082;var statearr_13096_13115 = state_13082__$1;(statearr_13096_13115[(2)] = inst_13074);
(statearr_13096_13115[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13083 === (8)))
{var inst_13054 = (state_13082[(10)]);var inst_13063 = (state_13082[(9)]);var inst_13061 = (state_13082[(7)]);var inst_13062 = (state_13082[(8)]);var inst_13066 = (function (){var c = inst_13063;var v = inst_13062;var vec__13059 = inst_13061;var cs = inst_13054;return ((function (c,v,vec__13059,cs,inst_13054,inst_13063,inst_13061,inst_13062,state_val_13083,c__6421__auto___13106,out){
return (function (p1__12999_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12999_SHARP_);
});
;})(c,v,vec__13059,cs,inst_13054,inst_13063,inst_13061,inst_13062,state_val_13083,c__6421__auto___13106,out))
})();var inst_13067 = cljs.core.filterv.call(null,inst_13066,inst_13054);var inst_13054__$1 = inst_13067;var state_13082__$1 = (function (){var statearr_13097 = state_13082;(statearr_13097[(10)] = inst_13054__$1);
return statearr_13097;
})();var statearr_13098_13116 = state_13082__$1;(statearr_13098_13116[(2)] = null);
(statearr_13098_13116[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___13106,out))
;return ((function (switch__6406__auto__,c__6421__auto___13106,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_13102 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13102[(0)] = state_machine__6407__auto__);
(statearr_13102[(1)] = (1));
return statearr_13102;
});
var state_machine__6407__auto____1 = (function (state_13082){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_13082);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e13103){if((e13103 instanceof Object))
{var ex__6410__auto__ = e13103;var statearr_13104_13117 = state_13082;(statearr_13104_13117[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13082);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13103;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13118 = state_13082;
state_13082 = G__13118;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_13082){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_13082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___13106,out))
})();var state__6423__auto__ = (function (){var statearr_13105 = f__6422__auto__.call(null);(statearr_13105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___13106);
return statearr_13105;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___13106,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6421__auto___13211 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___13211,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___13211,out){
return (function (state_13188){var state_val_13189 = (state_13188[(1)]);if((state_val_13189 === (7)))
{var inst_13170 = (state_13188[(7)]);var inst_13170__$1 = (state_13188[(2)]);var inst_13171 = (inst_13170__$1 == null);var inst_13172 = cljs.core.not.call(null,inst_13171);var state_13188__$1 = (function (){var statearr_13190 = state_13188;(statearr_13190[(7)] = inst_13170__$1);
return statearr_13190;
})();if(inst_13172)
{var statearr_13191_13212 = state_13188__$1;(statearr_13191_13212[(1)] = (8));
} else
{var statearr_13192_13213 = state_13188__$1;(statearr_13192_13213[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (1)))
{var inst_13165 = (0);var state_13188__$1 = (function (){var statearr_13193 = state_13188;(statearr_13193[(8)] = inst_13165);
return statearr_13193;
})();var statearr_13194_13214 = state_13188__$1;(statearr_13194_13214[(2)] = null);
(statearr_13194_13214[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (4)))
{var state_13188__$1 = state_13188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13188__$1,(7),ch);
} else
{if((state_val_13189 === (6)))
{var inst_13183 = (state_13188[(2)]);var state_13188__$1 = state_13188;var statearr_13195_13215 = state_13188__$1;(statearr_13195_13215[(2)] = inst_13183);
(statearr_13195_13215[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (3)))
{var inst_13185 = (state_13188[(2)]);var inst_13186 = cljs.core.async.close_BANG_.call(null,out);var state_13188__$1 = (function (){var statearr_13196 = state_13188;(statearr_13196[(9)] = inst_13185);
return statearr_13196;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13188__$1,inst_13186);
} else
{if((state_val_13189 === (2)))
{var inst_13165 = (state_13188[(8)]);var inst_13167 = (inst_13165 < n);var state_13188__$1 = state_13188;if(cljs.core.truth_(inst_13167))
{var statearr_13197_13216 = state_13188__$1;(statearr_13197_13216[(1)] = (4));
} else
{var statearr_13198_13217 = state_13188__$1;(statearr_13198_13217[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (11)))
{var inst_13165 = (state_13188[(8)]);var inst_13175 = (state_13188[(2)]);var inst_13176 = (inst_13165 + (1));var inst_13165__$1 = inst_13176;var state_13188__$1 = (function (){var statearr_13199 = state_13188;(statearr_13199[(8)] = inst_13165__$1);
(statearr_13199[(10)] = inst_13175);
return statearr_13199;
})();var statearr_13200_13218 = state_13188__$1;(statearr_13200_13218[(2)] = null);
(statearr_13200_13218[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (9)))
{var state_13188__$1 = state_13188;var statearr_13201_13219 = state_13188__$1;(statearr_13201_13219[(2)] = null);
(statearr_13201_13219[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (5)))
{var state_13188__$1 = state_13188;var statearr_13202_13220 = state_13188__$1;(statearr_13202_13220[(2)] = null);
(statearr_13202_13220[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (10)))
{var inst_13180 = (state_13188[(2)]);var state_13188__$1 = state_13188;var statearr_13203_13221 = state_13188__$1;(statearr_13203_13221[(2)] = inst_13180);
(statearr_13203_13221[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13189 === (8)))
{var inst_13170 = (state_13188[(7)]);var state_13188__$1 = state_13188;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13188__$1,(11),out,inst_13170);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___13211,out))
;return ((function (switch__6406__auto__,c__6421__auto___13211,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_13207 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13207[(0)] = state_machine__6407__auto__);
(statearr_13207[(1)] = (1));
return statearr_13207;
});
var state_machine__6407__auto____1 = (function (state_13188){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_13188);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e13208){if((e13208 instanceof Object))
{var ex__6410__auto__ = e13208;var statearr_13209_13222 = state_13188;(statearr_13209_13222[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13188);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13208;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13223 = state_13188;
state_13188 = G__13223;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_13188){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_13188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___13211,out))
})();var state__6423__auto__ = (function (){var statearr_13210 = f__6422__auto__.call(null);(statearr_13210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___13211);
return statearr_13210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___13211,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6421__auto___13320 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___13320,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___13320,out){
return (function (state_13295){var state_val_13296 = (state_13295[(1)]);if((state_val_13296 === (7)))
{var inst_13290 = (state_13295[(2)]);var state_13295__$1 = state_13295;var statearr_13297_13321 = state_13295__$1;(statearr_13297_13321[(2)] = inst_13290);
(statearr_13297_13321[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13296 === (1)))
{var inst_13272 = null;var state_13295__$1 = (function (){var statearr_13298 = state_13295;(statearr_13298[(7)] = inst_13272);
return statearr_13298;
})();var statearr_13299_13322 = state_13295__$1;(statearr_13299_13322[(2)] = null);
(statearr_13299_13322[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13296 === (4)))
{var inst_13275 = (state_13295[(8)]);var inst_13275__$1 = (state_13295[(2)]);var inst_13276 = (inst_13275__$1 == null);var inst_13277 = cljs.core.not.call(null,inst_13276);var state_13295__$1 = (function (){var statearr_13300 = state_13295;(statearr_13300[(8)] = inst_13275__$1);
return statearr_13300;
})();if(inst_13277)
{var statearr_13301_13323 = state_13295__$1;(statearr_13301_13323[(1)] = (5));
} else
{var statearr_13302_13324 = state_13295__$1;(statearr_13302_13324[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13296 === (6)))
{var state_13295__$1 = state_13295;var statearr_13303_13325 = state_13295__$1;(statearr_13303_13325[(2)] = null);
(statearr_13303_13325[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13296 === (3)))
{var inst_13292 = (state_13295[(2)]);var inst_13293 = cljs.core.async.close_BANG_.call(null,out);var state_13295__$1 = (function (){var statearr_13304 = state_13295;(statearr_13304[(9)] = inst_13292);
return statearr_13304;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13295__$1,inst_13293);
} else
{if((state_val_13296 === (2)))
{var state_13295__$1 = state_13295;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13295__$1,(4),ch);
} else
{if((state_val_13296 === (11)))
{var inst_13275 = (state_13295[(8)]);var inst_13284 = (state_13295[(2)]);var inst_13272 = inst_13275;var state_13295__$1 = (function (){var statearr_13305 = state_13295;(statearr_13305[(10)] = inst_13284);
(statearr_13305[(7)] = inst_13272);
return statearr_13305;
})();var statearr_13306_13326 = state_13295__$1;(statearr_13306_13326[(2)] = null);
(statearr_13306_13326[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13296 === (9)))
{var inst_13275 = (state_13295[(8)]);var state_13295__$1 = state_13295;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13295__$1,(11),out,inst_13275);
} else
{if((state_val_13296 === (5)))
{var inst_13275 = (state_13295[(8)]);var inst_13272 = (state_13295[(7)]);var inst_13279 = cljs.core._EQ_.call(null,inst_13275,inst_13272);var state_13295__$1 = state_13295;if(inst_13279)
{var statearr_13308_13327 = state_13295__$1;(statearr_13308_13327[(1)] = (8));
} else
{var statearr_13309_13328 = state_13295__$1;(statearr_13309_13328[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13296 === (10)))
{var inst_13287 = (state_13295[(2)]);var state_13295__$1 = state_13295;var statearr_13310_13329 = state_13295__$1;(statearr_13310_13329[(2)] = inst_13287);
(statearr_13310_13329[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13296 === (8)))
{var inst_13272 = (state_13295[(7)]);var tmp13307 = inst_13272;var inst_13272__$1 = tmp13307;var state_13295__$1 = (function (){var statearr_13311 = state_13295;(statearr_13311[(7)] = inst_13272__$1);
return statearr_13311;
})();var statearr_13312_13330 = state_13295__$1;(statearr_13312_13330[(2)] = null);
(statearr_13312_13330[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___13320,out))
;return ((function (switch__6406__auto__,c__6421__auto___13320,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_13316 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13316[(0)] = state_machine__6407__auto__);
(statearr_13316[(1)] = (1));
return statearr_13316;
});
var state_machine__6407__auto____1 = (function (state_13295){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_13295);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e13317){if((e13317 instanceof Object))
{var ex__6410__auto__ = e13317;var statearr_13318_13331 = state_13295;(statearr_13318_13331[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13295);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13317;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13332 = state_13295;
state_13295 = G__13332;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_13295){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_13295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___13320,out))
})();var state__6423__auto__ = (function (){var statearr_13319 = f__6422__auto__.call(null);(statearr_13319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___13320);
return statearr_13319;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___13320,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6421__auto___13467 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___13467,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___13467,out){
return (function (state_13437){var state_val_13438 = (state_13437[(1)]);if((state_val_13438 === (7)))
{var inst_13433 = (state_13437[(2)]);var state_13437__$1 = state_13437;var statearr_13439_13468 = state_13437__$1;(statearr_13439_13468[(2)] = inst_13433);
(statearr_13439_13468[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13438 === (1)))
{var inst_13400 = (new Array(n));var inst_13401 = inst_13400;var inst_13402 = (0);var state_13437__$1 = (function (){var statearr_13440 = state_13437;(statearr_13440[(7)] = inst_13402);
(statearr_13440[(8)] = inst_13401);
return statearr_13440;
})();var statearr_13441_13469 = state_13437__$1;(statearr_13441_13469[(2)] = null);
(statearr_13441_13469[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13438 === (4)))
{var inst_13405 = (state_13437[(9)]);var inst_13405__$1 = (state_13437[(2)]);var inst_13406 = (inst_13405__$1 == null);var inst_13407 = cljs.core.not.call(null,inst_13406);var state_13437__$1 = (function (){var statearr_13442 = state_13437;(statearr_13442[(9)] = inst_13405__$1);
return statearr_13442;
})();if(inst_13407)
{var statearr_13443_13470 = state_13437__$1;(statearr_13443_13470[(1)] = (5));
} else
{var statearr_13444_13471 = state_13437__$1;(statearr_13444_13471[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13438 === (15)))
{var inst_13427 = (state_13437[(2)]);var state_13437__$1 = state_13437;var statearr_13445_13472 = state_13437__$1;(statearr_13445_13472[(2)] = inst_13427);
(statearr_13445_13472[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13438 === (13)))
{var state_13437__$1 = state_13437;var statearr_13446_13473 = state_13437__$1;(statearr_13446_13473[(2)] = null);
(statearr_13446_13473[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13438 === (6)))
{var inst_13402 = (state_13437[(7)]);var inst_13423 = (inst_13402 > (0));var state_13437__$1 = state_13437;if(cljs.core.truth_(inst_13423))
{var statearr_13447_13474 = state_13437__$1;(statearr_13447_13474[(1)] = (12));
} else
{var statearr_13448_13475 = state_13437__$1;(statearr_13448_13475[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13438 === (3)))
{var inst_13435 = (state_13437[(2)]);var state_13437__$1 = state_13437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13437__$1,inst_13435);
} else
{if((state_val_13438 === (12)))
{var inst_13401 = (state_13437[(8)]);var inst_13425 = cljs.core.vec.call(null,inst_13401);var state_13437__$1 = state_13437;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13437__$1,(15),out,inst_13425);
} else
{if((state_val_13438 === (2)))
{var state_13437__$1 = state_13437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13437__$1,(4),ch);
} else
{if((state_val_13438 === (11)))
{var inst_13417 = (state_13437[(2)]);var inst_13418 = (new Array(n));var inst_13401 = inst_13418;var inst_13402 = (0);var state_13437__$1 = (function (){var statearr_13449 = state_13437;(statearr_13449[(7)] = inst_13402);
(statearr_13449[(8)] = inst_13401);
(statearr_13449[(10)] = inst_13417);
return statearr_13449;
})();var statearr_13450_13476 = state_13437__$1;(statearr_13450_13476[(2)] = null);
(statearr_13450_13476[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13438 === (9)))
{var inst_13401 = (state_13437[(8)]);var inst_13415 = cljs.core.vec.call(null,inst_13401);var state_13437__$1 = state_13437;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13437__$1,(11),out,inst_13415);
} else
{if((state_val_13438 === (5)))
{var inst_13402 = (state_13437[(7)]);var inst_13410 = (state_13437[(11)]);var inst_13401 = (state_13437[(8)]);var inst_13405 = (state_13437[(9)]);var inst_13409 = (inst_13401[inst_13402] = inst_13405);var inst_13410__$1 = (inst_13402 + (1));var inst_13411 = (inst_13410__$1 < n);var state_13437__$1 = (function (){var statearr_13451 = state_13437;(statearr_13451[(12)] = inst_13409);
(statearr_13451[(11)] = inst_13410__$1);
return statearr_13451;
})();if(cljs.core.truth_(inst_13411))
{var statearr_13452_13477 = state_13437__$1;(statearr_13452_13477[(1)] = (8));
} else
{var statearr_13453_13478 = state_13437__$1;(statearr_13453_13478[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13438 === (14)))
{var inst_13430 = (state_13437[(2)]);var inst_13431 = cljs.core.async.close_BANG_.call(null,out);var state_13437__$1 = (function (){var statearr_13455 = state_13437;(statearr_13455[(13)] = inst_13430);
return statearr_13455;
})();var statearr_13456_13479 = state_13437__$1;(statearr_13456_13479[(2)] = inst_13431);
(statearr_13456_13479[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13438 === (10)))
{var inst_13421 = (state_13437[(2)]);var state_13437__$1 = state_13437;var statearr_13457_13480 = state_13437__$1;(statearr_13457_13480[(2)] = inst_13421);
(statearr_13457_13480[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13438 === (8)))
{var inst_13410 = (state_13437[(11)]);var inst_13401 = (state_13437[(8)]);var tmp13454 = inst_13401;var inst_13401__$1 = tmp13454;var inst_13402 = inst_13410;var state_13437__$1 = (function (){var statearr_13458 = state_13437;(statearr_13458[(7)] = inst_13402);
(statearr_13458[(8)] = inst_13401__$1);
return statearr_13458;
})();var statearr_13459_13481 = state_13437__$1;(statearr_13459_13481[(2)] = null);
(statearr_13459_13481[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___13467,out))
;return ((function (switch__6406__auto__,c__6421__auto___13467,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_13463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13463[(0)] = state_machine__6407__auto__);
(statearr_13463[(1)] = (1));
return statearr_13463;
});
var state_machine__6407__auto____1 = (function (state_13437){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_13437);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e13464){if((e13464 instanceof Object))
{var ex__6410__auto__ = e13464;var statearr_13465_13482 = state_13437;(statearr_13465_13482[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13437);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13464;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13483 = state_13437;
state_13437 = G__13483;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_13437){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_13437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___13467,out))
})();var state__6423__auto__ = (function (){var statearr_13466 = f__6422__auto__.call(null);(statearr_13466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___13467);
return statearr_13466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___13467,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6421__auto___13626 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6421__auto___13626,out){
return (function (){var f__6422__auto__ = (function (){var switch__6406__auto__ = ((function (c__6421__auto___13626,out){
return (function (state_13596){var state_val_13597 = (state_13596[(1)]);if((state_val_13597 === (7)))
{var inst_13592 = (state_13596[(2)]);var state_13596__$1 = state_13596;var statearr_13598_13627 = state_13596__$1;(statearr_13598_13627[(2)] = inst_13592);
(statearr_13598_13627[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13597 === (1)))
{var inst_13555 = [];var inst_13556 = inst_13555;var inst_13557 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13596__$1 = (function (){var statearr_13599 = state_13596;(statearr_13599[(7)] = inst_13557);
(statearr_13599[(8)] = inst_13556);
return statearr_13599;
})();var statearr_13600_13628 = state_13596__$1;(statearr_13600_13628[(2)] = null);
(statearr_13600_13628[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13597 === (4)))
{var inst_13560 = (state_13596[(9)]);var inst_13560__$1 = (state_13596[(2)]);var inst_13561 = (inst_13560__$1 == null);var inst_13562 = cljs.core.not.call(null,inst_13561);var state_13596__$1 = (function (){var statearr_13601 = state_13596;(statearr_13601[(9)] = inst_13560__$1);
return statearr_13601;
})();if(inst_13562)
{var statearr_13602_13629 = state_13596__$1;(statearr_13602_13629[(1)] = (5));
} else
{var statearr_13603_13630 = state_13596__$1;(statearr_13603_13630[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13597 === (15)))
{var inst_13586 = (state_13596[(2)]);var state_13596__$1 = state_13596;var statearr_13604_13631 = state_13596__$1;(statearr_13604_13631[(2)] = inst_13586);
(statearr_13604_13631[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13597 === (13)))
{var state_13596__$1 = state_13596;var statearr_13605_13632 = state_13596__$1;(statearr_13605_13632[(2)] = null);
(statearr_13605_13632[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13597 === (6)))
{var inst_13556 = (state_13596[(8)]);var inst_13581 = inst_13556.length;var inst_13582 = (inst_13581 > (0));var state_13596__$1 = state_13596;if(cljs.core.truth_(inst_13582))
{var statearr_13606_13633 = state_13596__$1;(statearr_13606_13633[(1)] = (12));
} else
{var statearr_13607_13634 = state_13596__$1;(statearr_13607_13634[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13597 === (3)))
{var inst_13594 = (state_13596[(2)]);var state_13596__$1 = state_13596;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13596__$1,inst_13594);
} else
{if((state_val_13597 === (12)))
{var inst_13556 = (state_13596[(8)]);var inst_13584 = cljs.core.vec.call(null,inst_13556);var state_13596__$1 = state_13596;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13596__$1,(15),out,inst_13584);
} else
{if((state_val_13597 === (2)))
{var state_13596__$1 = state_13596;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13596__$1,(4),ch);
} else
{if((state_val_13597 === (11)))
{var inst_13564 = (state_13596[(10)]);var inst_13560 = (state_13596[(9)]);var inst_13574 = (state_13596[(2)]);var inst_13575 = [];var inst_13576 = inst_13575.push(inst_13560);var inst_13556 = inst_13575;var inst_13557 = inst_13564;var state_13596__$1 = (function (){var statearr_13608 = state_13596;(statearr_13608[(11)] = inst_13576);
(statearr_13608[(7)] = inst_13557);
(statearr_13608[(8)] = inst_13556);
(statearr_13608[(12)] = inst_13574);
return statearr_13608;
})();var statearr_13609_13635 = state_13596__$1;(statearr_13609_13635[(2)] = null);
(statearr_13609_13635[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13597 === (9)))
{var inst_13556 = (state_13596[(8)]);var inst_13572 = cljs.core.vec.call(null,inst_13556);var state_13596__$1 = state_13596;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13596__$1,(11),out,inst_13572);
} else
{if((state_val_13597 === (5)))
{var inst_13564 = (state_13596[(10)]);var inst_13557 = (state_13596[(7)]);var inst_13560 = (state_13596[(9)]);var inst_13564__$1 = f.call(null,inst_13560);var inst_13565 = cljs.core._EQ_.call(null,inst_13564__$1,inst_13557);var inst_13566 = cljs.core.keyword_identical_QMARK_.call(null,inst_13557,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13567 = (inst_13565) || (inst_13566);var state_13596__$1 = (function (){var statearr_13610 = state_13596;(statearr_13610[(10)] = inst_13564__$1);
return statearr_13610;
})();if(cljs.core.truth_(inst_13567))
{var statearr_13611_13636 = state_13596__$1;(statearr_13611_13636[(1)] = (8));
} else
{var statearr_13612_13637 = state_13596__$1;(statearr_13612_13637[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13597 === (14)))
{var inst_13589 = (state_13596[(2)]);var inst_13590 = cljs.core.async.close_BANG_.call(null,out);var state_13596__$1 = (function (){var statearr_13614 = state_13596;(statearr_13614[(13)] = inst_13589);
return statearr_13614;
})();var statearr_13615_13638 = state_13596__$1;(statearr_13615_13638[(2)] = inst_13590);
(statearr_13615_13638[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13597 === (10)))
{var inst_13579 = (state_13596[(2)]);var state_13596__$1 = state_13596;var statearr_13616_13639 = state_13596__$1;(statearr_13616_13639[(2)] = inst_13579);
(statearr_13616_13639[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13597 === (8)))
{var inst_13564 = (state_13596[(10)]);var inst_13556 = (state_13596[(8)]);var inst_13560 = (state_13596[(9)]);var inst_13569 = inst_13556.push(inst_13560);var tmp13613 = inst_13556;var inst_13556__$1 = tmp13613;var inst_13557 = inst_13564;var state_13596__$1 = (function (){var statearr_13617 = state_13596;(statearr_13617[(14)] = inst_13569);
(statearr_13617[(7)] = inst_13557);
(statearr_13617[(8)] = inst_13556__$1);
return statearr_13617;
})();var statearr_13618_13640 = state_13596__$1;(statearr_13618_13640[(2)] = null);
(statearr_13618_13640[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6421__auto___13626,out))
;return ((function (switch__6406__auto__,c__6421__auto___13626,out){
return (function() {
var state_machine__6407__auto__ = null;
var state_machine__6407__auto____0 = (function (){var statearr_13622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13622[(0)] = state_machine__6407__auto__);
(statearr_13622[(1)] = (1));
return statearr_13622;
});
var state_machine__6407__auto____1 = (function (state_13596){while(true){
var ret_value__6408__auto__ = (function (){try{while(true){
var result__6409__auto__ = switch__6406__auto__.call(null,state_13596);if(cljs.core.keyword_identical_QMARK_.call(null,result__6409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6409__auto__;
}
break;
}
}catch (e13623){if((e13623 instanceof Object))
{var ex__6410__auto__ = e13623;var statearr_13624_13641 = state_13596;(statearr_13624_13641[(5)] = ex__6410__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13596);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13623;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13642 = state_13596;
state_13596 = G__13642;
continue;
}
} else
{return ret_value__6408__auto__;
}
break;
}
});
state_machine__6407__auto__ = function(state_13596){
switch(arguments.length){
case 0:
return state_machine__6407__auto____0.call(this);
case 1:
return state_machine__6407__auto____1.call(this,state_13596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6407__auto____0;
state_machine__6407__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6407__auto____1;
return state_machine__6407__auto__;
})()
;})(switch__6406__auto__,c__6421__auto___13626,out))
})();var state__6423__auto__ = (function (){var statearr_13625 = f__6422__auto__.call(null);(statearr_13625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6421__auto___13626);
return statearr_13625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6423__auto__);
});})(c__6421__auto___13626,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map