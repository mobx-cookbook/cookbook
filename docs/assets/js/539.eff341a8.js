"use strict";(self.webpackChunkmobx_cookbook=self.webpackChunkmobx_cookbook||[]).push([[539],{7539:(e,n,s)=>{s.r(n),s.d(n,{default:()=>t});const t="const observable = (value) => ({\n  value,\n  // Set, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0438\u0437 \u043a\u043e\u043b\u0431\u0435\u043a\u043e\u0432\n  observers: new Set(),\n  subscribe(observer) {\n    this.observers.add(observer)\n  },\n  unsubscribe(observer) {\n    this.observers.delete(observer)\n  },\n  get() {\n    return this.value\n  },\n  set(value) {\n    this.value = value\n    this.observers.forEach((notify) => notify())\n  },\n})\n\nconst title = observable('Mobx article')\nconst views = observable(10)\n\nconst logTitle = () => console.log(title.get())\ntitle.subscribe(logTitle)\n\ntitle.set('Lets write Mobx under 50 LOC')\nviews.set(11)\n\nexport default () => null\n"}}]);