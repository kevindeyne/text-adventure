(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: 'Roboto Mono', monospace;\n    font-size: 0.95em;\n    color: #e7f3ff;    \n    background-color: #0c0f13;\n\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    transition: background-color 1s linear;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" (window:keyup)=\"onKey($event)\">\n  <app-nav></app-nav>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.onKey = function (event) {
        if (event.key === 'Escape') {
            this.router.navigate(['/menu']);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _newgame_newgame_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./newgame/newgame.component */ "./src/app/newgame/newgame.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRouters = [
    { path: '', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"] },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"] },
    { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"] },
    { path: 'newgame', component: _newgame_newgame_component__WEBPACK_IMPORTED_MODULE_10__["NewgameComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'tasks', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                _newgame_newgame_component__WEBPACK_IMPORTED_MODULE_10__["NewgameComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRouters)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/domain/ConditionalConversationSwitch.ts":
/*!*********************************************************!*\
  !*** ./src/app/domain/ConditionalConversationSwitch.ts ***!
  \*********************************************************/
/*! exports provided: ConditionalConversationSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionalConversationSwitch", function() { return ConditionalConversationSwitch; });
var ConditionalConversationSwitch = /** @class */ (function () {
    function ConditionalConversationSwitch(conversationId, conditional) {
        this.conversationId = conversationId;
        this.conditional = conditional;
    }
    ConditionalConversationSwitch.prototype.getConversationId = function () {
        if (this.conditional()) {
            return this.conversationId;
        }
        return null;
    };
    return ConditionalConversationSwitch;
}());



/***/ }),

/***/ "./src/app/domain/ConditionalReply.ts":
/*!********************************************!*\
  !*** ./src/app/domain/ConditionalReply.ts ***!
  \********************************************/
/*! exports provided: ConditionalReply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionalReply", function() { return ConditionalReply; });
/* harmony import */ var _Interaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Interaction */ "./src/app/domain/Interaction.ts");
/* harmony import */ var _ConditionalText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConditionalText */ "./src/app/domain/ConditionalText.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ConditionalReply = /** @class */ (function (_super) {
    __extends(ConditionalReply, _super);
    function ConditionalReply() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConditionalReply.prototype.getInteraction = function () {
        var i = new _Interaction__WEBPACK_IMPORTED_MODULE_0__["Interaction"](null);
        i.nextScene = this.nextScene;
        i.condition = function () { return true; };
        localStorage.removeItem('current-conversation');
        localStorage.setItem('current-scene', this.nextScene.getNextSceneId());
        return i;
    };
    return ConditionalReply;
}(_ConditionalText__WEBPACK_IMPORTED_MODULE_1__["ConditionalText"]));



/***/ }),

/***/ "./src/app/domain/ConditionalSceneSwitch.ts":
/*!**************************************************!*\
  !*** ./src/app/domain/ConditionalSceneSwitch.ts ***!
  \**************************************************/
/*! exports provided: ConditionalSceneSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionalSceneSwitch", function() { return ConditionalSceneSwitch; });
var ConditionalSceneSwitch = /** @class */ (function () {
    function ConditionalSceneSwitch(sceneId, conditional) {
        this.sceneId = sceneId;
        this.conditional = conditional;
    }
    ConditionalSceneSwitch.prototype.getNextSceneId = function () {
        if (this.conditional()) {
            return this.sceneId;
        }
        return null;
    };
    return ConditionalSceneSwitch;
}());



/***/ }),

/***/ "./src/app/domain/ConditionalText.ts":
/*!*******************************************!*\
  !*** ./src/app/domain/ConditionalText.ts ***!
  \*******************************************/
/*! exports provided: ConditionalText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionalText", function() { return ConditionalText; });
var ConditionalText = /** @class */ (function () {
    function ConditionalText(text, conditional) {
        this.text = text;
        this.conditional = conditional;
    }
    ConditionalText.prototype.getText = function () {
        if (this.conditional()) {
            return this.text;
        }
        return '';
    };
    return ConditionalText;
}());



/***/ }),

/***/ "./src/app/domain/Conversation.ts":
/*!****************************************!*\
  !*** ./src/app/domain/Conversation.ts ***!
  \****************************************/
/*! exports provided: Conversation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conversation", function() { return Conversation; });
/* harmony import */ var _ConditionalReply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionalReply */ "./src/app/domain/ConditionalReply.ts");
/* harmony import */ var _ConditionalText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConditionalText */ "./src/app/domain/ConditionalText.ts");


var Conversation = /** @class */ (function () {
    function Conversation() {
        this.text = [];
        this.options = [];
    }
    Conversation.prototype.addText = function (text) {
        this.addConditionalText(function () { return true; }, text);
    };
    Conversation.prototype.addConditionalText = function (conditional, text) {
        this.text.push(new _ConditionalText__WEBPACK_IMPORTED_MODULE_1__["ConditionalText"](text, conditional));
    };
    Conversation.prototype.addOption = function (id, text) {
        this.addConditionalOption(id, function () { return true; }, text);
    };
    Conversation.prototype.addConditionalOption = function (id, conditional, text) {
        var reply = new _ConditionalReply__WEBPACK_IMPORTED_MODULE_0__["ConditionalReply"](text, conditional);
        reply.conversationId = id;
        this.options.push(reply);
    };
    Conversation.prototype.addSceneSwitchOption = function (scene, text) {
        this.addSceneSwitchConditionalOption(scene, function () { return true; }, text);
    };
    Conversation.prototype.addSceneSwitchConditionalOption = function (scene, conditional, text) {
        var reply = new _ConditionalReply__WEBPACK_IMPORTED_MODULE_0__["ConditionalReply"](text, conditional);
        reply.nextScene = scene;
        this.options.push(reply);
    };
    Conversation.prototype.addOptionWithAction = function (id, action, text) {
        this.addConditionalOptionWithAction(id, function () { return true; }, action, text);
    };
    Conversation.prototype.addConditionalOptionWithAction = function (id, conditional, action, text) {
        var reply = new _ConditionalReply__WEBPACK_IMPORTED_MODULE_0__["ConditionalReply"](text, conditional);
        reply.conversationId = id;
        reply.action = action;
        this.options.push(reply);
    };
    Conversation.prototype.getOptions = function () {
        var result = [];
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            var t = option.getText();
            if (t !== null && '' !== t) {
                result.push(t);
            }
        }
        return result;
    };
    Conversation.prototype.findOption = function (text) {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            var t = option.getText();
            if (t !== null) {
                if (t === text) {
                    if (option.action !== undefined) {
                        option.action();
                    }
                    return option;
                }
            }
        }
        return null;
    };
    return Conversation;
}());



/***/ }),

/***/ "./src/app/domain/Game.ts":
/*!********************************!*\
  !*** ./src/app/domain/Game.ts ***!
  \********************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _GameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameData */ "./src/app/domain/GameData.ts");
/* harmony import */ var _loader_ConvLookup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../loader/ConvLookup */ "./src/app/loader/ConvLookup.ts");
/* harmony import */ var _loader_SceneLookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../loader/SceneLookup */ "./src/app/loader/SceneLookup.ts");



var Game = /** @class */ (function () {
    function Game() {
        this.sLookup = new _loader_SceneLookup__WEBPACK_IMPORTED_MODULE_2__["SceneLookup"]();
        this.cLookup = new _loader_ConvLookup__WEBPACK_IMPORTED_MODULE_1__["ConvLookup"]();
        this.data = new _GameData__WEBPACK_IMPORTED_MODULE_0__["GameData"]();
        this.reloadScene();
    }
    Game.prototype.reloadScene = function () {
        this.currentScene = (localStorage.getItem('current-scene') !== null) ? this.sLookup.listing[localStorage.getItem('current-scene')] : null;
        return this.currentScene;
    };
    Game.prototype.reloadConversation = function (id) {
        var conv = this.cLookup.listing[id];
        if (conv !== undefined) {
            this.currentConversation = conv.conversation;
            return this.currentConversation;
        }
        return null;
    };
    Game.prototype.saveData = function () {
        if (this.data === null) {
            this.data = new _GameData__WEBPACK_IMPORTED_MODULE_0__["GameData"]();
        }
        this.clearOneTimes();
        var data = JSON.stringify(this.data);
        console.clear();
        console.log('save: ' + data);
        localStorage.setItem('data', data);
        this.resetOneTimes();
    };
    Game.prototype.loadData = function () {
        console.log('load: ' + localStorage.getItem('data'));
        this.data = JSON.parse(localStorage.getItem('data'));
    };
    Game.prototype.clearOneTimes = function () {
        this.data.onetime1 = undefined;
        this.data.onetime2 = undefined;
        this.data.lookAround = undefined;
        this.data.lookAt = undefined;
    };
    Game.prototype.resetOneTimes = function () {
        this.data.onetime1 = false;
        this.data.onetime2 = false;
        this.data.lookAround = false;
        this.data.lookAt = null;
    };
    Game.prototype.conditionalsSet = function () {
        return this.data.lookAt != null ||
            this.data.lookAround ||
            this.data.onetime1 ||
            this.data.onetime2;
    };
    return Game;
}());



/***/ }),

/***/ "./src/app/domain/GameData.ts":
/*!************************************!*\
  !*** ./src/app/domain/GameData.ts ***!
  \************************************/
/*! exports provided: GameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameData", function() { return GameData; });
var GameData = /** @class */ (function () {
    function GameData() {
        this.car_light = false;
        this.car_closeToBorder = false;
        this.car_stopped = false;
        this.car_infraction = false;
    }
    return GameData;
}());



/***/ }),

/***/ "./src/app/domain/Interaction.ts":
/*!***************************************!*\
  !*** ./src/app/domain/Interaction.ts ***!
  \***************************************/
/*! exports provided: Interaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interaction", function() { return Interaction; });
/* harmony import */ var _ConditionalText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionalText */ "./src/app/domain/ConditionalText.ts");

var Interaction = /** @class */ (function () {
    function Interaction(commands) {
        this.oneTimeMessages = [];
        this.commands = commands;
        this.preActionSet = false;
    }
    Interaction.prototype.loadScene = function () {
        if (this.nextScene !== undefined) {
            localStorage.setItem('current-scene', this.nextScene.getNextSceneId());
        }
        if (this.nextConversation !== undefined) {
            localStorage.setItem('current-conversation', this.nextConversation.getConversationId());
        }
        else {
            localStorage.removeItem('current-conversation');
        }
    };
    Interaction.prototype.runAction = function (htmlTag) {
        if (undefined !== this.action) {
            this.action(htmlTag);
        }
    };
    Interaction.prototype.runPreAction = function () {
        if (undefined !== this.preAction) {
            this.preAction();
        }
    };
    Interaction.prototype.setPreAction = function (action) {
        this.preAction = action;
        this.preActionSet = true;
    };
    Interaction.prototype.addText = function (text) {
        this.oneTimeMessages.push(new _ConditionalText__WEBPACK_IMPORTED_MODULE_0__["ConditionalText"](text, function () { return true; }));
    };
    Interaction.prototype.addConditionalText = function (conditional, text) {
        this.oneTimeMessages.push(new _ConditionalText__WEBPACK_IMPORTED_MODULE_0__["ConditionalText"](text, conditional));
    };
    Interaction.prototype.hasNextConversation = function () {
        return this.nextConversation !== undefined && this.nextConversation.getConversationId() !== null;
    };
    Interaction.prototype.hasNextScene = function () {
        return (this.nextScene !== undefined && this.nextScene.getNextSceneId() !== null) || this.preActionSet;
    };
    return Interaction;
}());



/***/ }),

/***/ "./src/app/domain/Scene.ts":
/*!*********************************!*\
  !*** ./src/app/domain/Scene.ts ***!
  \*********************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
/* harmony import */ var _ConditionalSceneSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionalSceneSwitch */ "./src/app/domain/ConditionalSceneSwitch.ts");
/* harmony import */ var _globals_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../globals/globals */ "./src/app/globals/globals.ts");
/* harmony import */ var _ConditionalText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConditionalText */ "./src/app/domain/ConditionalText.ts");
/* harmony import */ var _Interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Interaction */ "./src/app/domain/Interaction.ts");
/* harmony import */ var _globals_Interactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../globals/Interactions */ "./src/app/globals/Interactions.ts");





var Scene = /** @class */ (function () {
    function Scene() {
        this.text = [];
        this.interactions = [];
    }
    Scene.prototype.addText = function (text) {
        this.addConditionalText(function () { return !_globals_globals__WEBPACK_IMPORTED_MODULE_1__["game"].conditionalsSet(); }, text);
    };
    Scene.prototype.addConditionalText = function (conditional, text) {
        this.text.push(new _ConditionalText__WEBPACK_IMPORTED_MODULE_2__["ConditionalText"](text, conditional));
    };
    Scene.prototype.withLookAround = function (text) {
        var lookAround = new _Interaction__WEBPACK_IMPORTED_MODULE_3__["Interaction"](_globals_Interactions__WEBPACK_IMPORTED_MODULE_4__["LOOK_AROUND"]);
        lookAround.setPreAction(function () { _globals_globals__WEBPACK_IMPORTED_MODULE_1__["game"].data.lookAround = true; });
        this.text.push(new _ConditionalText__WEBPACK_IMPORTED_MODULE_2__["ConditionalText"](text, function () { return _globals_globals__WEBPACK_IMPORTED_MODULE_1__["game"].data.lookAround; }));
        this.interactions.push(lookAround);
    };
    Scene.prototype.withSceneSwitch = function (newSceneId, commands) {
        var sceneSwitch = new _Interaction__WEBPACK_IMPORTED_MODULE_3__["Interaction"](commands);
        sceneSwitch.nextScene = new _ConditionalSceneSwitch__WEBPACK_IMPORTED_MODULE_0__["ConditionalSceneSwitch"](newSceneId, function () { return true; });
        this.interactions.push(sceneSwitch);
    };
    Scene.prototype.withLookAt = function (lookAtObject, text) {
        var lookAt = new _Interaction__WEBPACK_IMPORTED_MODULE_3__["Interaction"](['look at ' + lookAtObject]);
        lookAt.setPreAction(function () { _globals_globals__WEBPACK_IMPORTED_MODULE_1__["game"].data.lookAt = lookAtObject; });
        this.text.push(new _ConditionalText__WEBPACK_IMPORTED_MODULE_2__["ConditionalText"](text, function () { return _globals_globals__WEBPACK_IMPORTED_MODULE_1__["game"].data.lookAt === lookAtObject; }));
        this.interactions.push(lookAt);
    };
    return Scene;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n    position: absolute;\n    bottom: 3em;\n    right: 0%;\n\n    overflow-y: scroll;\n    max-height: 99%;\n    width: 99%;\n}\n\np {\n    vertical-align:text-bottom;\n    width: 60%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.info{\n    color:#cab25a !important;\n}\n\n.self{\n    color:gray !important;\n}\n\n.old {\n    color: #b9b9b9;\n}\n\n/*scrollbar color*/\n\n::-webkit-scrollbar {\n    width: 0.5em;\n}\n\n::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: black;\n  outline: 1px solid black;\n}\n\n/*input*/\n\nfooter {\n    position: fixed;\n    bottom: 0%;\n    height: 3em;\n    width: 100%;\n}\n\nfooter input {\n    position: fixed;\n    bottom: 2em;\n    left: 2em;\n\n    background-color: transparent;\n    border: none;\n    outline: none;\n    color:white;\n    padding: 5px;\n    width: 95%;\n\n    font-family: 'Roboto Mono', monospace;\n    font-size: 1em;\n}\n\n.hidden {\n    display: none;\n}\n\n/* conversation */\n\nsection {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n}\n\nsection p {\n    padding: 5px;\n    width: 60%;\n    color: #9dc7ff;\n}\n\nsection p:hover {\n    background: #000000;\n    color: #9dc7ff;\n    cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #parentDiv [style.bottom]=\"convHeight\">\n  <p *ngFor='let sentence of sentences' [innerHTML]=\"sentence\" [ngClass]=\"{'info': sentence.startsWith('> ') || sentence.startsWith('(')}\"></p>\n</div>\n<footer>\n  <input type=\"text\" [ngClass]=\"inputClass\" autofocus #focus placeholder=\"Enter command\" (keyup)=\"onKey($event)\"  />\n  <section #conversation [ngClass]=\"convClass\">\n      <p *ngFor=\"let option of convOptions\" (click)=\"onClick($event)\">\n         <span>{{option}}</span>\n      </p>\n     </section>\n</footer>\n"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _globals_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../globals/globals */ "./src/app/globals/globals.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameComponent = /** @class */ (function () {
    function GameComponent() {
        this.convHeight = '';
        this.inputClass = '';
        this.convClass = 'hidden';
        this.loadedSceneId = null;
        this.htmlTag = document.getElementsByTagName("html")[0];
        this.sentences = [];
        this.convOptions = [];
        this.sentences = [];
        this.convOptions = [];
        this.loadHistory();
        this.load();
        this.focusTimeout();
    }
    GameComponent.prototype.ngOnInit = function () {
        if (null !== localStorage.getItem('current-conversation')) {
            this.showConversation(localStorage.getItem('current-conversation'));
        }
        if (null == localStorage.getItem('hasloaded')) {
            //this.jumpAhead();
        }
        _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].loadData();
    };
    GameComponent.prototype.loadHistory = function () {
        var history = JSON.parse(localStorage.getItem('game-history'));
        for (var _i = 0, history_1 = history; _i < history_1.length; _i++) {
            var sentence = history_1[_i];
            this.addSentence(sentence);
        }
    };
    GameComponent.prototype.load = function () {
        if (this.loadedSceneId !== _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].currentScene.id || _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].conditionalsSet()) {
            if (localStorage.getItem('game-history-loading-done') === null) {
                this.loadedSceneId = _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].currentScene.id;
                var s = _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].currentScene.scene;
                for (var _i = 0, _a = s.text; _i < _a.length; _i++) {
                    var sentence = _a[_i];
                    this.addSentence(sentence.getText());
                }
            }
        }
    };
    GameComponent.prototype.addSentence = function (sentence) {
        var _this = this;
        this.sentences.push(sentence);
        setTimeout(function () {
            _this.parentDiv.nativeElement.scrollTop = _this.parentDiv.nativeElement.scrollHeight;
        }, 10);
    };
    GameComponent.prototype.focusTimeout = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.inputClass === '') {
                _this.focus.nativeElement.focus();
            }
            _this.focusTimeout();
        }, 500);
    };
    GameComponent.prototype.enableConversationMode = function (turnon) {
        var _this = this;
        if (!turnon) {
            this.inputClass = '';
            this.convClass = 'hidden';
        }
        else {
            this.inputClass = 'hidden';
            this.convClass = '';
        }
        setTimeout(function () {
            _this.reformatLocation();
        }, 10);
    };
    GameComponent.prototype.reformatLocation = function () {
        var height = this.conversation.nativeElement.offsetHeight;
        if (height === 0) {
            this.convHeight = '3em';
        }
        else {
            this.convHeight = (height + 10) + 'px';
        }
    };
    GameComponent.prototype.onKey = function (event) {
        var target = event.currentTarget;
        var value = target.value;
        if (event.key === 'Enter') {
            this.loadSceneThroughCommand(target.value);
            target.value = '';
        }
    };
    GameComponent.prototype.addOldClassToAll = function () {
        var items = Array.from(document.querySelectorAll('p'));
        items.forEach(function (element) { element.classList.add('old'); });
    };
    GameComponent.prototype.loadSceneThroughCommand = function (command) {
        var s = _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].currentScene.scene;
        interactionLoop: for (var _i = 0, _a = s.interactions; _i < _a.length; _i++) {
            var i = _a[_i];
            for (var _b = 0, _c = i.commands; _b < _c.length; _b++) {
                var c = _c[_b];
                if (command.includes(c)) {
                    i.runPreAction();
                    this.addOldClassToAll();
                    this.addSentence('> ' + command);
                    this.showOneTimeMessages(i);
                    this.handleScene(i);
                    this.handleConversation(i);
                    i.runAction(this.htmlTag);
                    _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].saveData();
                    break interactionLoop;
                }
            }
        }
    };
    GameComponent.prototype.handleScene = function (interaction) {
        if (interaction.hasNextScene()) {
            this.enableConversationMode(false);
            localStorage.removeItem('game-history-loading-done');
            localStorage.removeItem('current-conversation');
            _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].reloadScene();
            this.load();
        }
    };
    GameComponent.prototype.handleConversation = function (interaction) {
        if (interaction.hasNextConversation()) {
            var cId = interaction.nextConversation.getConversationId();
            this.showConversation(cId);
        }
    };
    GameComponent.prototype.showConversation = function (id) {
        this.enableConversationMode(true);
        var c = _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].reloadConversation(id);
        if (c !== null) {
            this.addOldClassToAll();
            for (var _i = 0, _a = c.text; _i < _a.length; _i++) {
                var text = _a[_i];
                this.addSentence(text.getText());
            }
            this.convOptions = c.getOptions();
        }
    };
    GameComponent.prototype.showOneTimeMessages = function (interaction) {
        localStorage.setItem('game-history-loading-done', '1');
        for (var _i = 0, _a = interaction.oneTimeMessages; _i < _a.length; _i++) {
            var sentence = _a[_i];
            this.addSentence(sentence.getText());
        }
        localStorage.setItem('game-history', JSON.stringify(this.sentences));
        interaction.loadScene();
    };
    GameComponent.prototype.onClick = function (event) {
        var target = event.currentTarget;
        var text = target.innerText;
        this.addSentence('> ' + text);
        var cId = localStorage.getItem('current-conversation');
        var c = _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].reloadConversation(cId);
        var option = c.findOption(text);
        if (null !== option) {
            if (option.conversationId === undefined) {
                this.handleScene(option.getInteraction());
            }
            else {
                localStorage.setItem('current-conversation', option.conversationId);
                this.showConversation(option.conversationId);
            }
            _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].saveData();
        }
    };
    GameComponent.prototype.jumpAhead = function () {
        localStorage.setItem('hasloaded', '1');
        var counter = 0;
        this.sendCommand('look around', counter);
        this.sendCommand('press button', counter);
        this.sendCommand('turn on the radio', counter);
        this.sendCommand('open the compartment', counter);
        this.clickElement(1, counter);
        this.clickElement(1, counter);
        this.clickElement(1, counter);
        this.clickElement(0, counter);
        this.clickElement(1, counter);
        this.clickElement(2, counter);
        this.clickElement(0, counter);
        this.sendCommand('leave the car', counter);
        this.sendCommand('look around', counter);
        this.sendCommand('look at cables', counter);
        this.sendCommand('go inside', counter);
    };
    GameComponent.prototype.sendCommand = function (text, counter) {
        var self = this;
        setTimeout(function () {
            self.loadSceneThroughCommand(text);
        }, counter + 100 + (counter++ * 500));
    };
    GameComponent.prototype.clickElement = function (index, counter) {
        setTimeout(function () {
            var items = Array.from(document.querySelectorAll('footer p'));
            items[index].click();
        }, counter + 100 + (counter++ * 500));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('conversation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GameComponent.prototype, "conversation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('focus'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GameComponent.prototype, "focus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('parentDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GameComponent.prototype, "parentDiv", void 0);
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/globals/Interactions.ts":
/*!*****************************************!*\
  !*** ./src/app/globals/Interactions.ts ***!
  \*****************************************/
/*! exports provided: LOOK_AROUND, PRESS, EXIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOOK_AROUND", function() { return LOOK_AROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRESS", function() { return PRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXIT", function() { return EXIT; });
var LOOK_AROUND = ['look around'];
var PRESS = ['press'];
var EXIT = ['exit', 'leave'];


/***/ }),

/***/ "./src/app/globals/globals.ts":
/*!************************************!*\
  !*** ./src/app/globals/globals.ts ***!
  \************************************/
/*! exports provided: version, hasRunningGame, gameid, game, hasLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasRunningGame", function() { return hasRunningGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameid", function() { return gameid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasLoaded", function() { return hasLoaded; });
/* harmony import */ var _domain_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/Game */ "./src/app/domain/Game.ts");

var version = '0.0.1';
var hasRunningGame = localStorage.getItem('game-id') !== null && localStorage.getItem('current-scene') !== null;
var gameid = localStorage.getItem('game-id');
var game = new _domain_Game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
var hasLoaded = false;


/***/ }),

/***/ "./src/app/loader/0_intro/0_car.ts":
/*!*****************************************!*\
  !*** ./src/app/loader/0_intro/0_car.ts ***!
  \*****************************************/
/*! exports provided: InitCarScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitCarScene", function() { return InitCarScene; });
/* harmony import */ var _domain_ConditionalSceneSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../domain/ConditionalSceneSwitch */ "./src/app/domain/ConditionalSceneSwitch.ts");
/* harmony import */ var _domain_Interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../domain/Interaction */ "./src/app/domain/Interaction.ts");
/* harmony import */ var _globals_Interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../globals/Interactions */ "./src/app/globals/Interactions.ts");
/* harmony import */ var _domain_Scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../domain/Scene */ "./src/app/domain/Scene.ts");




var InitCarScene = /** @class */ (function () {
    function InitCarScene() {
        this.id = '0_init-car';
        this.scene = new _domain_Scene__WEBPACK_IMPORTED_MODULE_3__["Scene"]();
        this.scene.addText('Endless lush forests stretch out on both sides of the car. Rows upon rows of old pine trees cover the horizons, enveloping your car completely. In front of you, your headlights can only light up a simple two-lane road. It stretches on forever.');
        this.scene.addText('A slow stream of rain drains down from the gloomy gathering of clouds above you. The drive was long. You have seen no other car for hours.');
        this.scene.addText('(In order to interact with the story, type in your action where it says \'enter command\'. Try \'look around\')');
        var lookAround = new _domain_Interaction__WEBPACK_IMPORTED_MODULE_1__["Interaction"](_globals_Interactions__WEBPACK_IMPORTED_MODULE_2__["LOOK_AROUND"]);
        lookAround.nextScene = new _domain_ConditionalSceneSwitch__WEBPACK_IMPORTED_MODULE_0__["ConditionalSceneSwitch"]('0_car-dark', function () { return true; });
        this.scene.interactions = [lookAround];
    }
    return InitCarScene;
}());



/***/ }),

/***/ "./src/app/loader/0_intro/0_car_dark.ts":
/*!**********************************************!*\
  !*** ./src/app/loader/0_intro/0_car_dark.ts ***!
  \**********************************************/
/*! exports provided: CarDarkScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDarkScene", function() { return CarDarkScene; });
/* harmony import */ var _domain_ConditionalSceneSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../domain/ConditionalSceneSwitch */ "./src/app/domain/ConditionalSceneSwitch.ts");
/* harmony import */ var _globals_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../globals/globals */ "./src/app/globals/globals.ts");
/* harmony import */ var _domain_Interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../domain/Interaction */ "./src/app/domain/Interaction.ts");
/* harmony import */ var _domain_Scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../domain/Scene */ "./src/app/domain/Scene.ts");




var CarDarkScene = /** @class */ (function () {
    function CarDarkScene() {
        this.id = '0_car-dark';
        this.scene = new _domain_Scene__WEBPACK_IMPORTED_MODULE_3__["Scene"]();
        this.scene.addConditionalText(function () { return !_globals_globals__WEBPACK_IMPORTED_MODULE_1__["game"].data.car_light; }, 'The sun is already setting. There is little to see outside, other than the never-ending sea of trees. The inside of your car is too dark to see anything other than your dashboard lights. As your eyes glance upwards, a small button lights up. It shows a light-bulb symbol.');
        this.scene.addConditionalText(function () { return _globals_globals__WEBPACK_IMPORTED_MODULE_1__["game"].data.car_light; }, 'The same voice replies. \'Indoor lighting: off\', she says. The dim blue light slowly fades. It flickers momentarily, then turns off. Your car is not what it used to be.');
        var press = new _domain_Interaction__WEBPACK_IMPORTED_MODULE_2__["Interaction"](['button', 'light']);
        press.action = function (htmlTag) {
            _globals_globals__WEBPACK_IMPORTED_MODULE_1__["game"].data.car_light = true;
            //TODO htmlTag.style.backgroundColor = '#111a25';
        };
        press.nextScene = new _domain_ConditionalSceneSwitch__WEBPACK_IMPORTED_MODULE_0__["ConditionalSceneSwitch"]('0_car-light', function () { return true; });
        this.scene.interactions = [press];
    }
    return CarDarkScene;
}());



/***/ }),

/***/ "./src/app/loader/0_intro/0_car_light.ts":
/*!***********************************************!*\
  !*** ./src/app/loader/0_intro/0_car_light.ts ***!
  \***********************************************/
/*! exports provided: CarLightScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarLightScene", function() { return CarLightScene; });
/* harmony import */ var _domain_Interaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../domain/Interaction */ "./src/app/domain/Interaction.ts");
/* harmony import */ var _domain_Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../domain/Scene */ "./src/app/domain/Scene.ts");
/* harmony import */ var _globals_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals/globals */ "./src/app/globals/globals.ts");
/* harmony import */ var _domain_ConditionalSceneSwitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../domain/ConditionalSceneSwitch */ "./src/app/domain/ConditionalSceneSwitch.ts");
/* harmony import */ var _domain_ConditionalConversationSwitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../domain/ConditionalConversationSwitch */ "./src/app/domain/ConditionalConversationSwitch.ts");





var CarLightScene = /** @class */ (function () {
    function CarLightScene() {
        this.id = '0_car-light';
        this.scene = new _domain_Scene__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        this.scene.addText('You press the button.');
        this.scene.addText('\'Indoor lighting: on\', a soft, automated voice says. A dim blue light shines across the interior of your car. You see the radio controls and a passenger compartment.');
        this.scene.interactions = [];
        var press = new _domain_Interaction__WEBPACK_IMPORTED_MODULE_0__["Interaction"](['button', 'light']);
        press.nextScene = new _domain_ConditionalSceneSwitch__WEBPACK_IMPORTED_MODULE_3__["ConditionalSceneSwitch"]('0_car-dark', function () { return true; });
        press.action = function (htmlTag) {
            _globals_globals__WEBPACK_IMPORTED_MODULE_2__["game"].data.car_light = false;
            //TODO htmlTag.style.backgroundColor = '#0c0f13';
        };
        this.scene.interactions.push(press);
        var closeToBorderText = 'Ahead of you, you see some lights showing up. Red flashes, and a bright white constant light. Must be a zone border checkpoint.';
        var radio = new _domain_Interaction__WEBPACK_IMPORTED_MODULE_0__["Interaction"](['radio']);
        radio.addText('You turn on the radio. Some soft classical music starts playing for a few minutes. It slowly fades into static. Must be too far away from the Cities to get a good reception.');
        radio.addConditionalText(function () { return _globals_globals__WEBPACK_IMPORTED_MODULE_2__["game"].data.car_closeToBorder; }, closeToBorderText);
        radio.action = function () { _globals_globals__WEBPACK_IMPORTED_MODULE_2__["game"].data.car_closeToBorder = true; };
        radio.nextConversation = new _domain_ConditionalConversationSwitch__WEBPACK_IMPORTED_MODULE_4__["ConditionalConversationSwitch"]('1_checkpoint-approach', function () { return _globals_globals__WEBPACK_IMPORTED_MODULE_2__["game"].data.car_closeToBorder; });
        this.scene.interactions.push(radio);
        var compartment = new _domain_Interaction__WEBPACK_IMPORTED_MODULE_0__["Interaction"](['compartment']);
        compartment.addText('With a soft press on the compartment, it unlocks. This is where you left your notebook and your passport. The rest of your luggage is in the trunk. You don\'t need any of that right now. Your eyes dart back to the road ahead of you.');
        compartment.addConditionalText(function () { return _globals_globals__WEBPACK_IMPORTED_MODULE_2__["game"].data.car_closeToBorder; }, closeToBorderText);
        compartment.action = function () { _globals_globals__WEBPACK_IMPORTED_MODULE_2__["game"].data.car_closeToBorder = true; };
        compartment.nextConversation = new _domain_ConditionalConversationSwitch__WEBPACK_IMPORTED_MODULE_4__["ConditionalConversationSwitch"]('1_checkpoint-approach', function () { return _globals_globals__WEBPACK_IMPORTED_MODULE_2__["game"].data.car_closeToBorder; });
        this.scene.interactions.push(compartment);
    }
    return CarLightScene;
}());



/***/ }),

/***/ "./src/app/loader/1_checkpoint/1_checkpoint_approach.ts":
/*!**************************************************************!*\
  !*** ./src/app/loader/1_checkpoint/1_checkpoint_approach.ts ***!
  \**************************************************************/
/*! exports provided: CheckpointApproachConversation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckpointApproachConversation", function() { return CheckpointApproachConversation; });
/* harmony import */ var _globals_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../globals/globals */ "./src/app/globals/globals.ts");
/* harmony import */ var _domain_Conversation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../domain/Conversation */ "./src/app/domain/Conversation.ts");


var CheckpointApproachConversation = /** @class */ (function () {
    function CheckpointApproachConversation() {
        this.id = '1_checkpoint-approach';
        this.conversation = new _domain_Conversation__WEBPACK_IMPORTED_MODULE_1__["Conversation"]();
        this.conversation.addConditionalText(function () { return !_globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.car_stopped; }, 'A few seconds later, your car notifies you with a little alert. \'POLIS checkpoint approaching. Vehicle slowing down.\', a friendly voice explains.');
        this.conversation.addConditionalText(function () { return _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.car_stopped; }, 'You stop the car. There does not seem to be any activity in the checkpoint, aside from the lights.');
        this.conversation.addOptionWithAction('1_checkpoint-conversation', function () { _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.car_stopped = true; }, '[Allow the car to pull up to the checkpoint]');
        this.conversation.addConditionalOptionWithAction(this.id, function () { return !_globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.car_stopped; }, function () { _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.car_stopped = true; }, '[Stop the car and consider your options]');
        this.conversation.addOptionWithAction('1_checkpoint-drivepast', function () { _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.car_infraction = true; }, '[Override the automated slowdown and accelerate]');
    }
    return CheckpointApproachConversation;
}());



/***/ }),

/***/ "./src/app/loader/1_checkpoint/1_checkpoint_conversation.ts":
/*!******************************************************************!*\
  !*** ./src/app/loader/1_checkpoint/1_checkpoint_conversation.ts ***!
  \******************************************************************/
/*! exports provided: CheckpointConversation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckpointConversation", function() { return CheckpointConversation; });
/* harmony import */ var _globals_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../globals/globals */ "./src/app/globals/globals.ts");
/* harmony import */ var _domain_Conversation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../domain/Conversation */ "./src/app/domain/Conversation.ts");


var CheckpointConversation = /** @class */ (function () {
    function CheckpointConversation() {
        this.id = '1_checkpoint-conversation';
        this.conversation = new _domain_Conversation__WEBPACK_IMPORTED_MODULE_1__["Conversation"]();
        this.conversation.addConditionalText(function () { return !_globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.car_infraction; }, 'You pull up next to the checkpoint. Despite the lights being on, is nobody inside. On the side of the building hang three heavy iron machines. One of them uncouples and falls to the ground with a heavy thud. It crawls towards your car on four massive legs and looks inside through the windshield.');
        this.conversation.addConditionalText(function () { return !_globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.car_infraction; }, 'You pull over to the side of the road. The machine moves up next to the windshield.');
        this.conversation.addConditionalText(function () { return _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.car_infraction; }, 'You try to ignore it and focus on the road. There is probably a limit to how far these machines are allowed to go from their post. And you figure you can outrun it.');
        this.conversation.addConditionalText(function () { return _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.car_infraction; }, 'A bright blue light flashes starkly in the side view mirror as you see a massive wheel approach your car with ease. It eventually overtakes you and swiftly lashes onto your wheels. Your car skids on the wet road, brought off balance by the heavy machine.');
        this.conversation.addConditionalText(function () { return _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.car_infraction; }, '\'Warning: Car safety measures activated.\', a soft, automated voice says. Your car brings itself to a stop.');
        this.conversation.addConditionalText(function () { return _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.car_infraction; }, 'The machine detaches itself from your car and moves up next to the windshield. No way out now.');
        this.conversation.addText('\'Identification required\', it growls. Its voice module seems to have broken some time ago, so it sounds a little rougher than originally designed.');
        this.conversation.addOption('1_checkpoint-conversation-2', '[Show your passport to the robot]');
    }
    return CheckpointConversation;
}());



/***/ }),

/***/ "./src/app/loader/1_checkpoint/1_checkpoint_conversation_2.ts":
/*!********************************************************************!*\
  !*** ./src/app/loader/1_checkpoint/1_checkpoint_conversation_2.ts ***!
  \********************************************************************/
/*! exports provided: CheckpointConversation2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckpointConversation2", function() { return CheckpointConversation2; });
/* harmony import */ var _globals_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../globals/globals */ "./src/app/globals/globals.ts");
/* harmony import */ var _domain_Conversation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../domain/Conversation */ "./src/app/domain/Conversation.ts");


var CheckpointConversation2 = /** @class */ (function () {
    function CheckpointConversation2() {
        this.id = '1_checkpoint-conversation-2';
        this.conversation = new _domain_Conversation__WEBPACK_IMPORTED_MODULE_1__["Conversation"]();
        this.conversation.addText('You take your passport from the passenger compartment and show it to the machine. It has no face or eyes, so you just wave it where you think its sensor would be.');
        this.conversation.addText('\'Accepted\', the machine acknowledges.');
        this.conversation.addConditionalText(function () { return _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.car_infraction; }, '\'Your car has failed to adhere to a mandatory checkpoint. As per section 35.4A, all cars not previously identified must stop at zone checkpoints. As per section 37.4C, in case of automated failure, the driver is responsible for conducting a manual stop. Your file has been flagged.\'');
        this.conversation.addText('\'Please state your reason for entering [Zone 349].\'');
        this.conversation.addOption('1_checkpoint-conversation-3', '"Business."');
        this.conversation.addOption('1_checkpoint-conversation-3', '"I am meeting Dr. Søren Johanson to retrieve a unique nano-processor he recovered from a restoration site here in Sweden. I have a meeting with this man at the \'Fallen Swan\'."');
    }
    return CheckpointConversation2;
}());



/***/ }),

/***/ "./src/app/loader/1_checkpoint/1_checkpoint_conversation_3.ts":
/*!********************************************************************!*\
  !*** ./src/app/loader/1_checkpoint/1_checkpoint_conversation_3.ts ***!
  \********************************************************************/
/*! exports provided: CheckpointConversation3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckpointConversation3", function() { return CheckpointConversation3; });
/* harmony import */ var _globals_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../globals/globals */ "./src/app/globals/globals.ts");
/* harmony import */ var _domain_Conversation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../domain/Conversation */ "./src/app/domain/Conversation.ts");


var CheckpointConversation3 = /** @class */ (function () {
    function CheckpointConversation3() {
        this.id = '1_checkpoint-conversation-3';
        this.conversation = new _domain_Conversation__WEBPACK_IMPORTED_MODULE_1__["Conversation"]();
        this.conversation.addText('Without hesitation, the robotic growling voice continues. \'Your file indicates you arrived in Sweden today at Zone 348. State your employer.\'');
        this.conversation.addOptionWithAction('1_checkpoint-exit', function () {
            _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.nationality = 'Russian';
            _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.company = 'Prazdnikov Robotic';
        }, '\'I work for a Russian robotics manufacturer, Prazdnikov Robotic.\'');
        this.conversation.addOptionWithAction('1_checkpoint-exit', function () {
            _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.nationality = 'American';
            _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.company = 'MilSEC';
        }, '\'I am a US citizen. I work for a private military research facility: \'MilSEC\'\'.');
        this.conversation.addOptionWithAction('1_checkpoint-exit', function () {
            _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.nationality = 'Danish';
            _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.company = 'Ålborg Universitet';
        }, '\'I am a Danish security researcher with the Ålborg Universitet.\'');
        this.conversation.addOptionWithAction('1_checkpoint-exit', function () {
            _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.nationality = 'Chinese';
            _globals_globals__WEBPACK_IMPORTED_MODULE_0__["game"].data.company = 'State Robotics Institute';
        }, '\'I am here on an engineering mission from the Chinese State Robotics Institute.\'');
    }
    return CheckpointConversation3;
}());



/***/ }),

/***/ "./src/app/loader/1_checkpoint/1_checkpoint_drivepast.ts":
/*!***************************************************************!*\
  !*** ./src/app/loader/1_checkpoint/1_checkpoint_drivepast.ts ***!
  \***************************************************************/
/*! exports provided: CheckpointDrivePast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckpointDrivePast", function() { return CheckpointDrivePast; });
/* harmony import */ var _domain_Conversation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../domain/Conversation */ "./src/app/domain/Conversation.ts");

var CheckpointDrivePast = /** @class */ (function () {
    function CheckpointDrivePast() {
        this.id = '1_checkpoint-drivepast';
        this.conversation = new _domain_Conversation__WEBPACK_IMPORTED_MODULE_0__["Conversation"]();
        this.conversation.addText('With a few button presses you pull up the external connection interface of your car. You see a process running tagged \'polis-vehicle-compliance\', and kill it. The car\'s engine revs loudly as it accelerates to its previous speed once more.');
        this.conversation.addText('You accelerate towards the zone border checkpoint. There are no people inside. On the side of the building hang three heavy iron machines. One of them uncouples.');
        this.conversation.addText('Without slowing down at all, you blast past the checkpoint. The machine meshes each of its four legs together, as to form an iron wheel. It whirs up and starts chasing you down the dirt road.');
        this.conversation.addOption('1_checkpoint-conversation', '[Pull over on the side of the road]');
        this.conversation.addOption('1_checkpoint-conversation', '[Keep driving]');
    }
    return CheckpointDrivePast;
}());



/***/ }),

/***/ "./src/app/loader/1_checkpoint/1_checkpoint_exit.ts":
/*!**********************************************************!*\
  !*** ./src/app/loader/1_checkpoint/1_checkpoint_exit.ts ***!
  \**********************************************************/
/*! exports provided: CheckpointExit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckpointExit", function() { return CheckpointExit; });
/* harmony import */ var _domain_ConditionalSceneSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../domain/ConditionalSceneSwitch */ "./src/app/domain/ConditionalSceneSwitch.ts");
/* harmony import */ var _domain_Conversation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../domain/Conversation */ "./src/app/domain/Conversation.ts");


var CheckpointExit = /** @class */ (function () {
    function CheckpointExit() {
        this.id = '1_checkpoint-exit';
        this.conversation = new _domain_Conversation__WEBPACK_IMPORTED_MODULE_1__["Conversation"]();
        this.conversation.addText('The scene turns quiet for a while. The robot keeps balancing itself around your car, blocking your exit. Then it slowly moves out of the way, brings up two of its legs and attaches itself to the side of the building again.');
        this.conversation.addText('You start your car again and start driving further. The dirt road goes on. It winds down and then opens up to a more open area. On the right, you see a massive dam. On the left, the road goes on for a little while and leads to a hostel.');
        this.conversation.addText('It\'s a 3-story, white building weathered by the years. From some windows on the second story, thick red cables flow. The cables hang in the air and attach to a massive tower deeper in the forest. You see other red cables flow from that tower to the rest of the forest.');
        this.conversation.addSceneSwitchOption(new _domain_ConditionalSceneSwitch__WEBPACK_IMPORTED_MODULE_0__["ConditionalSceneSwitch"]('2_hostel_outside_car', function () { return true; }), '[Park the car]');
    }
    return CheckpointExit;
}());



/***/ }),

/***/ "./src/app/loader/2_hostel/2_hostel_lobby.ts":
/*!***************************************************!*\
  !*** ./src/app/loader/2_hostel/2_hostel_lobby.ts ***!
  \***************************************************/
/*! exports provided: HostelLobbyScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostelLobbyScene", function() { return HostelLobbyScene; });
/* harmony import */ var _domain_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../domain/Scene */ "./src/app/domain/Scene.ts");

var HostelLobbyScene = /** @class */ (function () {
    function HostelLobbyScene() {
        this.id = '2_hostel_lobby';
        this.scene = new _domain_Scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
        this.scene.addText('You are in the lobby.');
        this.scene.withLookAround('Not much else to see. The street is empty. Behind you, you hear the soft rumble of the dam. The entrance of the hostel is on the right.');
        this.scene.withLookAt('cables', 'Thick red cables dangle in the air above you. They stretch out from some of the windows all the way deep inside the forest, culminating together in a massive tower.');
        this.scene.withSceneSwitch('2_hostel_outside_car', ['car']); //TODO
        this.scene.withSceneSwitch('2_hostel_lobby', ['hostel', 'right', 'enter', 'inside']);
    }
    return HostelLobbyScene;
}());



/***/ }),

/***/ "./src/app/loader/2_hostel/2_hostel_outside.ts":
/*!*****************************************************!*\
  !*** ./src/app/loader/2_hostel/2_hostel_outside.ts ***!
  \*****************************************************/
/*! exports provided: HostelOutsideScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostelOutsideScene", function() { return HostelOutsideScene; });
/* harmony import */ var _domain_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../domain/Scene */ "./src/app/domain/Scene.ts");

var HostelOutsideScene = /** @class */ (function () {
    function HostelOutsideScene() {
        this.id = '2_hostel_outside';
        this.scene = new _domain_Scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
        this.scene.addText('You leave the car. The street is empty. Behind you, you hear the soft rumble of the dam. The entrance of the hostel is on the right.');
        this.scene.withLookAround('Not much else to see. The street is empty. Behind you, you hear the soft rumble of the dam. The entrance of the hostel is on the right.');
        this.scene.withLookAt('cables', 'Thick red cables dangle in the air above you. They stretch out from some of the windows all the way deep inside the forest, culminating together in a massive tower.');
        this.scene.withSceneSwitch('2_hostel_outside_car', ['car']); //TODO
        this.scene.withSceneSwitch('2_hostel_lobby', ['hostel', 'right', 'enter', 'inside']);
    }
    return HostelOutsideScene;
}());



/***/ }),

/***/ "./src/app/loader/2_hostel/2_hostel_outside_car.ts":
/*!*********************************************************!*\
  !*** ./src/app/loader/2_hostel/2_hostel_outside_car.ts ***!
  \*********************************************************/
/*! exports provided: HostelOutsideCarScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostelOutsideCarScene", function() { return HostelOutsideCarScene; });
/* harmony import */ var _domain_ConditionalSceneSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../domain/ConditionalSceneSwitch */ "./src/app/domain/ConditionalSceneSwitch.ts");
/* harmony import */ var _domain_Interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../domain/Interaction */ "./src/app/domain/Interaction.ts");
/* harmony import */ var _domain_Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../domain/Scene */ "./src/app/domain/Scene.ts");
/* harmony import */ var _globals_Interactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals/Interactions */ "./src/app/globals/Interactions.ts");




var HostelOutsideCarScene = /** @class */ (function () {
    function HostelOutsideCarScene() {
        this.id = '2_hostel_outside_car';
        this.scene = new _domain_Scene__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        this.scene.addText('This hostel is where the meeting with Dr. Søren Johanson was planned for you. You pull up the car in one of the three empty parking spaces. It should be a simple handover.');
        this.scene.addText('As you cut the engine to your car, a small screen pops up on your dashboard with a small gps map of the area. It shows \'Destination reached\' in a soft blue hue.');
        this.scene.addText('Soft raindrops drip on your windshield. The weather is still cloudy, but it\'s not as threatening any more. Hopefully you\'ll have clear skies soon.');
        this.scene.addText('(This is where the game world opens up to you, and you can go anywhere. Your car will get you to any locations on your GPS map. For now, leave the car and find Dr. Johanson at the hostel.)');
        var i = new _domain_Interaction__WEBPACK_IMPORTED_MODULE_1__["Interaction"](_globals_Interactions__WEBPACK_IMPORTED_MODULE_3__["EXIT"]);
        i.nextScene = new _domain_ConditionalSceneSwitch__WEBPACK_IMPORTED_MODULE_0__["ConditionalSceneSwitch"]('2_hostel_outside', function () { return true; });
        this.scene.interactions = [i];
    }
    return HostelOutsideCarScene;
}());



/***/ }),

/***/ "./src/app/loader/ConvLookup.ts":
/*!**************************************!*\
  !*** ./src/app/loader/ConvLookup.ts ***!
  \**************************************/
/*! exports provided: ConvLookup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvLookup", function() { return ConvLookup; });
/* harmony import */ var _1_checkpoint_1_checkpoint_conversation_3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1_checkpoint/1_checkpoint_conversation_3 */ "./src/app/loader/1_checkpoint/1_checkpoint_conversation_3.ts");
/* harmony import */ var _1_checkpoint_1_checkpoint_exit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1_checkpoint/1_checkpoint_exit */ "./src/app/loader/1_checkpoint/1_checkpoint_exit.ts");
/* harmony import */ var _1_checkpoint_1_checkpoint_conversation_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./1_checkpoint/1_checkpoint_conversation_2 */ "./src/app/loader/1_checkpoint/1_checkpoint_conversation_2.ts");
/* harmony import */ var _1_checkpoint_1_checkpoint_drivepast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./1_checkpoint/1_checkpoint_drivepast */ "./src/app/loader/1_checkpoint/1_checkpoint_drivepast.ts");
/* harmony import */ var _1_checkpoint_1_checkpoint_conversation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./1_checkpoint/1_checkpoint_conversation */ "./src/app/loader/1_checkpoint/1_checkpoint_conversation.ts");
/* harmony import */ var _1_checkpoint_1_checkpoint_approach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./1_checkpoint/1_checkpoint_approach */ "./src/app/loader/1_checkpoint/1_checkpoint_approach.ts");






var ConvLookup = /** @class */ (function () {
    function ConvLookup() {
        //TODO load in modules
        this.listing = new Map();
        this.addConv(new _1_checkpoint_1_checkpoint_approach__WEBPACK_IMPORTED_MODULE_5__["CheckpointApproachConversation"]());
        this.addConv(new _1_checkpoint_1_checkpoint_conversation__WEBPACK_IMPORTED_MODULE_4__["CheckpointConversation"]());
        this.addConv(new _1_checkpoint_1_checkpoint_conversation_2__WEBPACK_IMPORTED_MODULE_2__["CheckpointConversation2"]());
        this.addConv(new _1_checkpoint_1_checkpoint_conversation_3__WEBPACK_IMPORTED_MODULE_0__["CheckpointConversation3"]());
        this.addConv(new _1_checkpoint_1_checkpoint_drivepast__WEBPACK_IMPORTED_MODULE_3__["CheckpointDrivePast"]());
        this.addConv(new _1_checkpoint_1_checkpoint_exit__WEBPACK_IMPORTED_MODULE_1__["CheckpointExit"]());
    }
    ConvLookup.prototype.addConv = function (conv) {
        this.listing[conv.id] = conv;
    };
    return ConvLookup;
}());



/***/ }),

/***/ "./src/app/loader/SceneLookup.ts":
/*!***************************************!*\
  !*** ./src/app/loader/SceneLookup.ts ***!
  \***************************************/
/*! exports provided: SceneLookup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneLookup", function() { return SceneLookup; });
/* harmony import */ var _2_hostel_2_hostel_outside_car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2_hostel/2_hostel_outside_car */ "./src/app/loader/2_hostel/2_hostel_outside_car.ts");
/* harmony import */ var _2_hostel_2_hostel_outside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2_hostel/2_hostel_outside */ "./src/app/loader/2_hostel/2_hostel_outside.ts");
/* harmony import */ var _0_intro_0_car__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./0_intro/0_car */ "./src/app/loader/0_intro/0_car.ts");
/* harmony import */ var _0_intro_0_car_dark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./0_intro/0_car_dark */ "./src/app/loader/0_intro/0_car_dark.ts");
/* harmony import */ var _0_intro_0_car_light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./0_intro/0_car_light */ "./src/app/loader/0_intro/0_car_light.ts");
/* harmony import */ var _2_hostel_2_hostel_lobby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./2_hostel/2_hostel_lobby */ "./src/app/loader/2_hostel/2_hostel_lobby.ts");






var SceneLookup = /** @class */ (function () {
    function SceneLookup() {
        //TODO load in modules
        this.listing = new Map();
        this.addScene(new _0_intro_0_car__WEBPACK_IMPORTED_MODULE_2__["InitCarScene"]());
        this.addScene(new _0_intro_0_car_dark__WEBPACK_IMPORTED_MODULE_3__["CarDarkScene"]());
        this.addScene(new _0_intro_0_car_light__WEBPACK_IMPORTED_MODULE_4__["CarLightScene"]());
        this.addScene(new _2_hostel_2_hostel_outside_car__WEBPACK_IMPORTED_MODULE_0__["HostelOutsideCarScene"]());
        this.addScene(new _2_hostel_2_hostel_outside__WEBPACK_IMPORTED_MODULE_1__["HostelOutsideScene"]());
        this.addScene(new _2_hostel_2_hostel_lobby__WEBPACK_IMPORTED_MODULE_5__["HostelLobbyScene"]());
    }
    SceneLookup.prototype.addScene = function (scene) {
        this.listing[scene.id] = scene;
    };
    return SceneLookup;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    position: absolute;\n\n    bottom: 0%;\n    right: 0%;\n    height: 100%;\n}\n\ndiv {\n    margin-top: 10%;\n    font-size: 1.5em;\n}\n\nul {\n    list-style-type: none;\n}\n\nli {\n    padding: 0.2em;\n    text-align: center;\n}\n\na {\n    color: aliceblue;\n    text-decoration: none;\n    padding: 0.5em;\n    \n    display: inline-block;\n    width: 300px;\n}\n\na:hover{    \n    background-color: #474747;\n}\n\n.small {\n    padding-top: 2em;\n    font-size: 0.5em;\n    color:gray;\n}"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #parentDiv>\n  <ul>\n    <li *ngIf=\"hasRunningGame\"><a routerLink=\"/game\">Continue</a></li>\n    <li><a routerLink=\"/newgame\">New game</a></li>\n    <li><a routerLink=\"/load\">Load gamestate</a></li>\n    <li><a routerLink=\"/settings\">Settings</a></li>\n    <li class='small'>{{version}} :: {{gameid}}</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globals_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/globals */ "./src/app/globals/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.version = '';
        this.gameid = '';
        this.hasRunningGame = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.hasRunningGame = _globals_globals__WEBPACK_IMPORTED_MODULE_1__["hasRunningGame"];
        this.version = 'v' + _globals_globals__WEBPACK_IMPORTED_MODULE_1__["version"];
        this.gameid = _globals_globals__WEBPACK_IMPORTED_MODULE_1__["gameid"] || 'no gameid';
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n   padding: 0;\n   margin: 0;\n}\n\nli {\n    display: inline;\n}\n\na {\n    display: inline-block;\n    padding: 8px;\n    color:#e7f3ff;\n}\n\n* {\n    display: none;    \n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li><a routerLink=\"/\">{{menuOptions[0]}}</a></li>\n  <li><a routerLink=\"/explore\">{{menuOptions[1]}}</a> </li>\n  <li><a routerLink=\"/profile\">{{menuOptions[2]}}</a></li>\n  <li><a routerLink=\"/tasks\">{{menuOptions[3]}}</a></li>\n  <li><a routerLink=\"/settings\">{{menuOptions[4]}}</a></li>\n  <li>{{menuOptions[5]}}: {{locale}}</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _services_locale_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/locale.service */ "./src/app/services/locale.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(data) {
        this.data = data;
        this.menuOptionsEN = ['Home', 'Explore', 'Crime profile', 'Tasks', 'Settings', 'Language'];
        this.menuOptionsNL = ['Start', 'Verkennen', 'Misdaad profiel', 'Taken', 'Voorkeuren', 'Taal'];
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentLocale.subscribe(function (newLocale) {
            _this.locale = newLocale;
            if (_this.locale === 'nl') {
                _this.menuOptions = _this.menuOptionsNL;
            }
            else {
                _this.menuOptions = _this.menuOptionsEN;
            }
        });
    };
    NavComponent.prototype.ngOnDestroy = function () {
        this.data.unsubscribe();
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_locale_service__WEBPACK_IMPORTED_MODULE_0__["LocaleService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/newgame/newgame.component.css":
/*!***********************************************!*\
  !*** ./src/app/newgame/newgame.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/newgame/newgame.component.html":
/*!************************************************!*\
  !*** ./src/app/newgame/newgame.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  newgame works!\n</p>\n"

/***/ }),

/***/ "./src/app/newgame/newgame.component.ts":
/*!**********************************************!*\
  !*** ./src/app/newgame/newgame.component.ts ***!
  \**********************************************/
/*! exports provided: NewgameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewgameComponent", function() { return NewgameComponent; });
/* harmony import */ var _domain_GameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../domain/GameData */ "./src/app/domain/GameData.ts");
/* harmony import */ var _globals_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../globals/globals */ "./src/app/globals/globals.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewgameComponent = /** @class */ (function () {
    function NewgameComponent(router) {
        this.router = router;
    }
    NewgameComponent.prototype.ngOnInit = function () {
        /*if (!globals.hasRunningGame) {*/
        localStorage.setItem('game-id', angular2_uuid__WEBPACK_IMPORTED_MODULE_3__["UUID"].UUID());
        localStorage.setItem('current-scene', '0_init-car');
        localStorage.setItem('game-history', JSON.stringify([]));
        localStorage.removeItem('current-conversation');
        localStorage.removeItem('game-history-loading-done');
        localStorage.removeItem('hasloaded');
        _globals_globals__WEBPACK_IMPORTED_MODULE_1__["game"].reloadScene();
        this.router.navigate(['/game']);
        _globals_globals__WEBPACK_IMPORTED_MODULE_1__["game"].data = new _domain_GameData__WEBPACK_IMPORTED_MODULE_0__["GameData"]();
        _globals_globals__WEBPACK_IMPORTED_MODULE_1__["game"].saveData();
        /*} else {
          // todo: show are you sure
          this.router.navigate(['/game']);
        }*/
    };
    NewgameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-newgame',
            template: __webpack_require__(/*! ./newgame.component.html */ "./src/app/newgame/newgame.component.html"),
            styles: [__webpack_require__(/*! ./newgame.component.css */ "./src/app/newgame/newgame.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NewgameComponent);
    return NewgameComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/locale.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/locale.service.ts ***!
  \********************************************/
/*! exports provided: LocaleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleService", function() { return LocaleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LocaleService = /** @class */ (function () {
    function LocaleService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('en');
        this.currentLocale = this.messageSource.asObservable();
    }
    LocaleService.prototype.push = function (locale) {
        this.messageSource.next(locale);
    };
    LocaleService.prototype.unsubscribe = function () {
        this.messageSource.unsubscribe();
    };
    LocaleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], LocaleService);
    return LocaleService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    margin: 8px;\n    display: block;\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Settings</h1>\n<p>\n  <a (click)=\"onClick('en')\">Change locale to English</a>\n  <a (click)=\"onClick('nl')\">Change locale to Dutch</a>\n</p>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _services_locale_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/locale.service */ "./src/app/services/locale.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(data) {
        this.data = data;
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.onClick = function (newLocale) {
        this.data.push(newLocale);
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_services_locale_service__WEBPACK_IMPORTED_MODULE_0__["LocaleService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.component.css":
/*!*******************************************!*\
  !*** ./src/app/tasks/tasks.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tasks/tasks.component.html":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tasks works!\n</p>\n"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/tasks/tasks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/kevindeyne/text-adventure/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map