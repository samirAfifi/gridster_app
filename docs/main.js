(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "//Ya":
/*!***********************************************************!*\
  !*** ./src/app/components/audience/audience.component.ts ***!
  \***********************************************************/
/*! exports provided: AudienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceComponent", function() { return AudienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-gridster2 */ "Ljk9");
/* harmony import */ var _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scroll/scroll.component */ "GyMa");
/* harmony import */ var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../presentation/presentation.component */ "5BKs");





const _c0 = ["gridsterItem"];
class AudienceComponent {
    constructor() {
        this.unitHeight = 0;
        this.item1 = { x: 3, y: 1, rows: 5, cols: 5 };
        this.item2 = { x: 5, y: 6, rows: 4, cols: 7 };
        this.options = {
            itemResizeCallback: this.itemResize.bind(this),
            pushItems: true,
            minCols: 12,
            maxCols: 12,
            minRows: 5,
            fixedRowHeight: 120,
            gridType: 'scrollVertical',
            resizable: {
                enabled: true
            },
            draggable: {
                enabled: true
            }
        };
    }
    itemResize(item, itemComponent) {
        console.log('update', item);
        if (itemComponent.gridster.curRowHeight > 1) {
            this.unitHeight = itemComponent.gridster.curRowHeight;
        }
        itemComponent.gridster.curRowHeight += (item.cols * 100 - item.rows) / 10000;
    }
    ngOnChanges(changes) {
    }
}
AudienceComponent.ɵfac = function AudienceComponent_Factory(t) { return new (t || AudienceComponent)(); };
AudienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudienceComponent, selectors: [["app-audience"]], viewQuery: function AudienceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gridItem = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 7, consts: [[3, "options"], [3, "item"], ["gridsterItem", ""], [3, "unitHeight", "item"]], template: function AudienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gridster", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "gridster-item", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-scroll", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "gridster-item", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-presentation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.item1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unitHeight", ctx.unitHeight)("item", ctx.item1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.item2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unitHeight", ctx.unitHeight)("item", ctx.item1);
    } }, directives: [angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridsterComponent"], angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridsterItemComponent"], _scroll_scroll_component__WEBPACK_IMPORTED_MODULE_2__["ScrollComponent"], _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_3__["PresentationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXVkaWVuY2UvYXVkaWVuY2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-audience',
                templateUrl: './audience.component.html',
                styleUrls: ['./audience.component.css']
            }]
    }], function () { return []; }, { gridItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gridsterItem']
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\jqwidgets\app\src\main.ts */"zUnb");


/***/ }),

/***/ "57pk":
/*!*************************************************************!*\
  !*** ./src/app/components/over-view/over-view.component.ts ***!
  \*************************************************************/
/*! exports provided: OverViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverViewComponent", function() { return OverViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-gridster2 */ "Ljk9");
/* harmony import */ var _performance_performance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../performance/performance.component */ "rk5b");
/* harmony import */ var _quick_quick_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quick/quick.component */ "YhXI");
/* harmony import */ var _overall_overall_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../overall/overall.component */ "SjkG");
/* harmony import */ var _ration_ration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ration/ration.component */ "Wb8a");
/* harmony import */ var _real_time_real_time_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../real-time/real-time.component */ "M0yB");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../map/map.component */ "EZtS");









const _c0 = ["gridsterItem"];
class OverViewComponent {
    constructor() {
        this.unitHeight = 0;
        this.item1 = { x: 3, y: 1, rows: 3, cols: 5 };
        this.item2 = { x: 8, y: 1, rows: 3, cols: 4 };
        this.item3 = { x: 3, y: 4, rows: 3, cols: 5 };
        this.item4 = { x: 3, y: 4, rows: 3, cols: 4 };
        this.item5 = { x: 3, y: 7, rows: 3, cols: 9 };
        this.item6 = { x: 3, y: 10, rows: 3, cols: 9 };
        this.options = {
            itemResizeCallback: this.itemResize.bind(this),
            pushItems: true,
            minCols: 12,
            maxCols: 12,
            minRows: 5,
            fixedRowHeight: 120,
            gridType: 'scrollVertical',
            resizable: {
                enabled: true
            },
            draggable: {
                enabled: true
            }
        };
    }
    itemResize(item, itemComponent) {
        console.log('update', item);
        if (itemComponent.gridster.curRowHeight > 1) {
            this.unitHeight = itemComponent.gridster.curRowHeight;
        }
        itemComponent.gridster.curRowHeight += (item.cols * 100 - item.rows) / 10000;
    }
    ngOnChanges(changes) {
    }
}
OverViewComponent.ɵfac = function OverViewComponent_Factory(t) { return new (t || OverViewComponent)(); };
OverViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverViewComponent, selectors: [["app-over-view"]], viewQuery: function OverViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gridItem = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 23, vars: 19, consts: [[3, "options"], [3, "item"], ["gridsterItem", ""], [3, "unitHeight", "item"]], template: function OverViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gridster", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "gridster-item", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-performance", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "gridster-item", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-quick", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "gridster-item", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-overall", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "gridster-item", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-ration", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "gridster-item", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-real-time", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "gridster-item", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-map", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.item1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unitHeight", ctx.unitHeight)("item", ctx.item1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.item2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unitHeight", ctx.unitHeight)("item", ctx.item2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.item3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unitHeight", ctx.unitHeight)("item", ctx.item3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.item4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unitHeight", ctx.unitHeight)("item", ctx.item4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.item5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unitHeight", ctx.unitHeight)("item", ctx.item5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.item6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unitHeight", ctx.unitHeight)("item", ctx.item6);
    } }, directives: [angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridsterComponent"], angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridsterItemComponent"], _performance_performance_component__WEBPACK_IMPORTED_MODULE_2__["PerformanceComponent"], _quick_quick_component__WEBPACK_IMPORTED_MODULE_3__["QuickComponent"], _overall_overall_component__WEBPACK_IMPORTED_MODULE_4__["OverallComponent"], _ration_ration_component__WEBPACK_IMPORTED_MODULE_5__["RationComponent"], _real_time_real_time_component__WEBPACK_IMPORTED_MODULE_6__["RealTimeComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3Zlci12aWV3L292ZXItdmlldy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-over-view',
                templateUrl: './over-view.component.html',
                styleUrls: ['./over-view.component.css'],
            }]
    }], function () { return []; }, { gridItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gridsterItem']
        }] }); })();


/***/ }),

/***/ "5BKs":
/*!*******************************************************************!*\
  !*** ./src/app/components/presentation/presentation.component.ts ***!
  \*******************************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PresentationComponent {
    constructor() { }
    ngOnInit() {
    }
}
PresentationComponent.ɵfac = function PresentationComponent_Factory(t) { return new (t || PresentationComponent)(); };
PresentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PresentationComponent, selectors: [["app-presentation"]], inputs: { unitHeight: "unitHeight", item: "item" }, decls: 31, vars: 0, consts: [[1, "card"], [1, "card-block"], [1, "row"], ["id", "content-spy", 1, "col-sm-3"], [1, "nav", "nav-pills", "nav-stacked"], ["role", "presentation", 1, "active"], ["href", "#lorem"], ["role", "presentation"], ["href", "#eros"], ["href", "#vestibulum"], ["id", "content", "data-spy", "scroll", "data-target", "#content-spy", 1, "col-sm-9"], ["id", "lorem"], ["id", "eros"], ["id", "vestibulum"], ["src", "assets/imgs/jon.png", 1, "img-responsive"]], template: function PresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The Lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The Eros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "The Vestibulum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "The Lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit enim eu sodales feugiat. In dignissim ultrices lectus et feugiat. Mauris interdum massa quis enim faucibus, id suscipit urna egestas. Cras nibh urna, blandit mattis auctor sed, tristique sed urna. Donec sed enim dignissim, volutpat tellus eget, semper mauris. Praesent eu congue risus. Curabitur euismod, eros in placerat commodo, dolor quam sagittis elit, convallis mollis lorem leo vitae odio. Integer sagittis urna sed tellus commodo consectetur. Sed molestie malesuada risus id ultricies. Fusce gravida hendrerit felis, quis cursus odio elementum sit amet. Integer efficitur velit at mauris convallis cursus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "The Eros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Curabitur eget pharetra risus, ac bibendum magna. Pellentesque dapibus ipsum a metus feugiat, ac rutrum quam pretium. Morbi scelerisque, elit in tincidunt vehicula, sem nulla condimentum dui, vitae sollicitudin tellus ligula ut justo. Proin consequat at velit sed lacinia. Nunc ac tellus molestie, consequat odio vel, tristique felis. Aliquam porttitor, justo ac aliquet vehicula, erat quam dictum est, nec facilisis mi ligula ut purus. Donec viverra mauris metus, aliquet porta quam vulputate quis. Sed bibendum tortor tortor, et malesuada lectus faucibus at. Proin lectus elit, congue eu dapibus ac, maximus commodo nunc. Vestibulum nunc augue, scelerisque sed augue at, viverra pellentesque magna. In non mauris id justo vehicula congue ultrices at ante. Nulla in ipsum diam. Nam in lacus ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "The Vestibulum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Integer eleifend consectetur est, et hendrerit arcu consequat sed. Sed lacus elit, ornare in turpis at, laoreet suscipit turpis. Vivamus scelerisque metus a sem feugiat consectetur. Nam tempus quis metus eget ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae sagittis nulla, sed porttitor leo. Duis rutrum nisi sed ex tristique euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu risus sodales, faucibus ex et, pellentesque eros. Aenean eleifend lorem a tincidunt euismod. Suspendisse tempus vel justo id vestibulum. Sed sed dui sollicitudin, condimentum ante iaculis, eleifend nulla. Etiam leo lectus, dignissim et luctus in, dignissim ac quam. Nunc sagittis viverra hendrerit. Donec vulputate, ante ac ultricies ullamcorper, urna purus bibendum lectus, in egestas nisi tellus non justo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#content[_ngcontent-%COMP%] {\r\n    height: 30em;\r\n    overflow: auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmVzZW50YXRpb24vcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAzMGVtO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-presentation',
                templateUrl: './presentation.component.html',
                styleUrls: ['./presentation.component.css']
            }]
    }], function () { return []; }, { unitHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7AdY":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 2, vars: 0, template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EZtS":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highmaps */ "bIOw");
/* harmony import */ var highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _highcharts_map_collection_custom_world_geo_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @highcharts/map-collection/custom/world.geo.json */ "0K9C");
var _highcharts_map_collection_custom_world_geo_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @highcharts/map-collection/custom/world.geo.json */ "0K9C", 1);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-angular */ "kAVD");





class MapComponent {
    constructor() {
        this.Highcharts = highcharts_highmaps__WEBPACK_IMPORTED_MODULE_1___default.a;
        this.updateFlag = false;
        this.chartConstructor = 'mapChart';
        this.chartData = [{ code3: 'ABW', z: 105 }, { code3: 'AFG', z: 35530 }];
        this.chartOptions = {
            chart: {
                map: _highcharts_map_collection_custom_world_geo_json__WEBPACK_IMPORTED_MODULE_2__,
                events: {
                    load: function () {
                        this.series[0].data[8].zoomTo();
                    }
                }
            },
            title: {
                text: 'Highmaps basic demo'
            },
            subtitle: {
                text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/world.js">World, Miller projection, medium resolution</a>'
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    alignTo: 'spacingBox'
                },
                buttons: {
                    zoomIn: {
                        onclick: function () {
                            this.series[0].data[212].zoomTo();
                            console.log(this.series[0].data[212]);
                        }
                    }
                }
            },
            legend: {
                enabled: true
            },
            colorAxis: {
                min: 0
            },
            series: [
                {
                    type: 'map',
                    name: 'Random data',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    },
                    allAreas: false,
                    data: [
                        ['fo', 0],
                        ['um', 1],
                        ['us', 2],
                        ['jp', 3],
                        ['sc', 4],
                        ['in', 5],
                        ['fr', 6],
                        ['fm', 7],
                        ['cn', 8],
                        ['pt', 9],
                        ['sw', 10],
                        ['sh', 11],
                        ['br', 12],
                        ['ki', 13],
                        ['ph', 14],
                        ['mx', 15],
                        ['es', 16],
                        ['bu', 17],
                        ['mv', 18],
                        ['sp', 19],
                        ['gb', 20],
                        ['gr', 21],
                        ['as', 22],
                        ['dk', 23],
                        ['gl', 24],
                        ['gu', 25],
                        ['mp', 26],
                        ['pr', 27],
                        ['vi', 28],
                        ['ca', 29],
                        ['st', 30],
                        ['cv', 31],
                        ['dm', 32],
                        ['nl', 33],
                        ['jm', 34],
                        ['ws', 35],
                        ['om', 36],
                        ['vc', 37],
                        ['tr', 38],
                        ['bd', 39],
                        ['lc', 40],
                        ['nr', 41],
                        ['no', 42],
                        ['kn', 43],
                        ['bh', 44],
                        ['to', 45],
                        ['fi', 46],
                        ['id', 47],
                        ['mu', 48],
                        ['se', 49],
                        ['tt', 50],
                        ['my', 51],
                        ['pa', 52],
                        ['pw', 53],
                        ['tv', 54],
                        ['mh', 55],
                        ['cl', 56],
                        ['th', 57],
                        ['gd', 58],
                        ['ee', 59],
                        ['ag', 60],
                        ['tw', 61],
                        ['bb', 62],
                        ['it', 63],
                        ['mt', 64],
                        ['vu', 65],
                        ['sg', 66],
                        ['cy', 67],
                        ['lk', 68],
                        ['km', 69],
                        ['fj', 70],
                        ['ru', 71],
                        ['va', 72],
                        ['sm', 73],
                        ['kz', 74],
                        ['az', 75],
                        ['tj', 76],
                        ['ls', 77],
                        ['uz', 78],
                        ['ma', 79],
                        ['co', 80],
                        ['tl', 81],
                        ['tz', 82],
                        ['ar', 83],
                        ['sa', 84],
                        ['pk', 85],
                        ['ye', 86],
                        ['ae', 87],
                        ['ke', 88],
                        ['pe', 89],
                        ['do', 90],
                        ['ht', 91],
                        ['pg', 92],
                        ['ao', 93],
                        ['kh', 94],
                        ['vn', 95],
                        ['mz', 96],
                        ['cr', 97],
                        ['bj', 98],
                        ['ng', 99],
                        ['ir', 100],
                        ['sv', 101],
                        ['sl', 102],
                        ['gw', 103],
                        ['hr', 104],
                        ['bz', 105],
                        ['za', 106],
                        ['cf', 107],
                        ['sd', 108],
                        ['cd', 109],
                        ['kw', 110],
                        ['de', 111],
                        ['be', 112],
                        ['ie', 113],
                        ['kp', 114],
                        ['kr', 115],
                        ['gy', 116],
                        ['hn', 117],
                        ['mm', 118],
                        ['ga', 119],
                        ['gq', 120],
                        ['ni', 121],
                        ['lv', 122],
                        ['ug', 123],
                        ['mw', 124],
                        ['am', 125],
                        ['sx', 126],
                        ['tm', 127],
                        ['zm', 128],
                        ['nc', 129],
                        ['mr', 130],
                        ['dz', 131],
                        ['lt', 132],
                        ['et', 133],
                        ['er', 134],
                        ['gh', 135],
                        ['si', 136],
                        ['gt', 137],
                        ['ba', 138],
                        ['jo', 139],
                        ['sy', 140],
                        ['mc', 141],
                        ['al', 142],
                        ['uy', 143],
                        ['cnm', 144],
                        ['mn', 145],
                        ['rw', 146],
                        ['so', 147],
                        ['bo', 148],
                        ['cm', 149],
                        ['cg', 150],
                        ['eh', 151],
                        ['rs', 152],
                        ['me', 153],
                        ['tg', 154],
                        ['la', 155],
                        ['af', 156],
                        ['ua', 157],
                        ['sk', 158],
                        ['jk', 159],
                        ['bg', 160],
                        ['qa', 161],
                        ['li', 162],
                        ['at', 163],
                        ['sz', 164],
                        ['hu', 165],
                        ['ro', 166],
                        ['ne', 167],
                        ['lu', 168],
                        ['ad', 169],
                        ['ci', 170],
                        ['lr', 171],
                        ['bn', 172],
                        ['iq', 173],
                        ['ge', 174],
                        ['gm', 175],
                        ['ch', 176],
                        ['td', 177],
                        ['kv', 178],
                        ['lb', 179],
                        ['dj', 180],
                        ['bi', 181],
                        ['sr', 182],
                        ['il', 183],
                        ['ml', 184],
                        ['sn', 185],
                        ['gn', 186],
                        ['zw', 187],
                        ['pl', 188],
                        ['mk', 189],
                        ['py', 190],
                        ['by', 191],
                        ['cz', 192],
                        ['bf', 193],
                        ['na', 194],
                        ['ly', 195],
                        ['tn', 196],
                        ['bt', 197],
                        ['md', 198],
                        ['ss', 199],
                        ['bw', 200],
                        ['bs', 201],
                        ['nz', 202],
                        ['cu', 203],
                        ['ec', 204],
                        ['au', 205],
                        ['ve', 206],
                        ['sb', 207],
                        ['mg', 208],
                        ['is', 209],
                        ['eg', 210],
                        ['kg', 211],
                        ['np', 212]
                    ]
                }
            ]
        };
    }
    handleUpdate() {
        let dataUpdate = [
            ['fo', 1110],
            ['um', 1111],
            ['us', 1112],
            ['jp', 1113],
            ['sc', 1114],
            ['in', 1115],
            ['fr', 1111],
            ['fm', 1117],
            ['cn', 1118],
            ['pt', 1111],
            ['sw', 1110],
            ['sh', 1111],
            ['br', 1112],
            ['ki', 1113],
            ['ph', 1114],
            ['mx', 1115],
            ['es', 1116],
            ['bu', 1117],
            ['mv', 1118],
            ['sp', 1119],
            ['gb', 1120]
        ];
        this.chartOptions.series[0] = {
            data: dataUpdate,
            type: 'map'
        };
        this.chartOptions.title = {
            text: 'update'
        };
        this.updateFlag = true;
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], inputs: { unitHeight: "unitHeight", item: "item" }, decls: 1, vars: 3, consts: [["id", "container", 2, "width", "100%", "height", "400px", "display", "block", 3, "Highcharts", "constructorType", "options"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "highcharts-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("constructorType", ctx.chartConstructor)("options", ctx.chartOptions);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_3__["HighchartsChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], null, { unitHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "GyMa":
/*!*******************************************************!*\
  !*** ./src/app/components/scroll/scroll.component.ts ***!
  \*******************************************************/
/*! exports provided: ScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollComponent", function() { return ScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScrollComponent {
    constructor() {
        this.slides = ['./assets/imgs/doge.jpg', './assets/imgs/cat.jpg', './assets/imgs/laika.jpg'];
        this.i = 0;
    }
    getSlide() {
        return this.slides[this.i];
    }
    getPrev() {
        this.i = this.i === 0 ? 0 : this.i - 1;
    }
    //edit here    
    getNext() {
        this.i = this.i === this.slides.length - 1 ? this.i : this.i + 1;
    }
}
ScrollComponent.ɵfac = function ScrollComponent_Factory(t) { return new (t || ScrollComponent)(); };
ScrollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollComponent, selectors: [["app-scroll"]], inputs: { unitHeight: "unitHeight", item: "item" }, decls: 12, vars: 1, consts: [[1, "analysis"], ["id", "carouselExampleControls", "data-ride", "carousel", 1, "carousel", "slide"], ["role", "listbox", 1, "carousel-inner"], ["alt", "slide", 3, "src"], [1, "carousel-caption"], [1, "icon"], [1, "fa-solid", "fa-chevron-left", 3, "click"], [1, "fa-solid", "fa-chevron-right", 3, "click"]], template: function ScrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Laika said:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hey! How are you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollComponent_Template_i_click_10_listener() { return ctx.getPrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollComponent_Template_i_click_11_listener() { return ctx.getNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.getSlide(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".card-block[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\n.quick-stats[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 2rem;\r\n    line-height: 3rem;\r\n    border-bottom: 0.1rem solid #e5e9ec;\r\n}\r\n.quick-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{\r\n    font-weight: 300;\r\n}\r\n.quick-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-weight: 300;\r\n    float: right;\r\n    color: #8b91a0;\r\n}\r\n.card[_ngcontent-%COMP%], .card-block[_ngcontent-%COMP%]{\r\n    border-radius: 10px;\r\n}\r\n.item[_ngcontent-%COMP%]{\r\n   \r\n    padding: 10px;\r\n    box-shadow: 5px 10px 10px #888888;\r\n    border-radius: 10px;\r\n    margin-bottom: 50px;\r\n}\r\n.carousel-inner[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.carousel-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\ni[_ngcontent-%COMP%] {\r\n    font-size: 35px;\r\n    z-index: 9999999;\r\n    color: black;\r\n    cursor: pointer;\r\n\r\n}\r\n.icon[_ngcontent-%COMP%]   .fa-chevron-left[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 50%;\r\n    left:3%\r\n   \r\n}\r\n.icon[_ngcontent-%COMP%]   .fa-chevron-right[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 50%;\r\n    right:  3%;\r\n    color: #fff;\r\n\r\n\r\n}\r\n#content[_ngcontent-%COMP%] {\r\n    height: 30em;\r\n    overflow: auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY3JvbGwvc2Nyb2xsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBR0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNDO0lBQ0csZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTs7QUFFbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1I7O0FBRUo7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7OztBQUdmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2Nyb2xsL3Njcm9sbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYmxvY2t7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5xdWljay1zdGF0c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjZTVlOWVjO1xyXG59XHJcbi5xdWljay1zdGF0cyBzdHJvbmd7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi5xdWljay1zdGF0cyBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjOGI5MWEwO1xyXG59XHJcbi5jYXJkLC5jYXJkLWJsb2Nre1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uaXRlbXtcclxuICAgXHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCAjODg4ODg4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcblxyXG4uY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jYXJvdXNlbC1pbm5lciBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4gaSB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk5O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG4uaWNvbiAuZmEtY2hldnJvbi1sZWZ0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OjMlXHJcbiAgIFxyXG59XHJcbi5pY29uIC5mYS1jaGV2cm9uLXJpZ2h0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICByaWdodDogIDMlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG5cclxufVxyXG4jY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDMwZW07XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scroll',
                templateUrl: './scroll.component.html',
                styleUrls: ['./scroll.component.css']
            }]
    }], null, { unitHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Lquv":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 52, vars: 0, consts: [[1, "container-fluid", "my-5"], [1, "row"], ["id", "side-menu", "data-spy", "affix", "data-offset-top", "0", 1, "col-sm-3", "hidden-xs"], [1, "header"], [1, "fa-solid", "fa-rotate-right"], [1, "contant"], ["src", "assets/imgs/jon.png", "alt", "imgs/jon", 1, "w-25"], [1, "link"], [1, "nav", "nav-pills", "nav-stacked"], ["href", "#", 1, "transition"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-home"], ["routerLink", "audience", 1, "transition"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-user"], ["routerLink", "", "role", "button", "data-toggle", "collapse", "aria-expanded", "false", "aria-controls", "finances-opts", 1, "transition"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-usd"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-menu-left", "pull-right", "transition"], ["id", "finances-opts", 1, "collapse", "list-unstyled"], ["routerLink", "", 1, "transition"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-time"], [1, "badge", "pull-right"], [1, "nav-divider"], ["routerLink", "", "role", "button", "data-toggle", "collapse", "aria-expanded", "false", "aria-controls", "", 1, "transition"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-briefcase"], ["id", "", 1, "collapse", "list-unstyled"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Jonny Doo @jonnydoo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Audience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Finances ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Incomes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Outcomes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Real time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Free ration nation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Cats going crazy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 100%;\r\n    background-color: #e5e9ec;\r\n  }\r\n\r\n\r\n\r\nnav.navbar-fixed-top[_ngcontent-%COMP%] {\r\n    background-color: #FFF;\r\n    border: none;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   .top-left-menu[_ngcontent-%COMP%] {\r\n    background-color: #252830;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n    height: auto;\r\n  }\r\n\r\n.navbar-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: 1.5em;\r\n    font-weight: 300;\r\n    color: #FFF;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    color: #FFF;\r\n  }\r\n\r\n\r\n\r\n.navbar-toggle[_ngcontent-%COMP%] {\r\n    border-color: #252830;\r\n    background-color: #e5e9ec;\r\n    margin-top: 13px\r\n  }\r\n\r\n.navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\r\n    background-color: #252830;\r\n  }\r\n\r\n\r\n\r\nnav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%] {\r\n    padding: 0.9em;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    border-radius: 0.25em;\r\n    border: none;\r\n    width: 70%;\r\n    padding-left: 1.9em;\r\n    background-color: #F3F3F3;\r\n    box-shadow: none;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n    width: 100%;\r\n    box-shadow: none;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%]   .glyphicon-search[_ngcontent-%COMP%] {\r\n    z-index: 99;\r\n    left: 1.7em;\r\n  }\r\n\r\n\r\n\r\nnav[_ngcontent-%COMP%]   #nav-menu[_ngcontent-%COMP%] {\r\n    padding: 0.4em;\r\n    padding-right: 1em;\r\n  }\r\n\r\n\r\n\r\n#nav-menu[_ngcontent-%COMP%]   #btn-notifications[_ngcontent-%COMP%]    > .badge[_ngcontent-%COMP%] {\r\n    color: #FFF;\r\n    background-color: #f35958;\r\n    font-size: 0.7em;\r\n    padding: 0.3rem 0.55rem 0.3rem 0.5rem;\r\n    position: absolute;\r\n    right: -0.4rem;\r\n    top: 1rem;\r\n    z-index: 99;\r\n  }\r\n\r\n#btn-notifications[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%], #nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding-top: 1.5rem;\r\n    color: #252830;\r\n    font-weight: 500;\r\n  }\r\n\r\n#btn-notifications[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n  }\r\n\r\n#notification-list[_ngcontent-%COMP%] {\r\n    max-height: 20em;\r\n    overflow: auto;\r\n  }\r\n\r\n#notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    opacity: 0.7;\r\n    margin: 1.5rem;\r\n    border-radius: 0.5rem;\r\n    padding: 0.5rem 1.3rem;\r\n    background-color: #EFEFEF;\r\n    position: relative;\r\n  }\r\n\r\n#notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #262626;\r\n    text-decoration: none;\r\n    opacity: 1;\r\n  }\r\n\r\n#notification-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    height: 35px;\r\n    width: 35px;\r\n    margin-right: 1em;\r\n    margin-top: 1em;\r\n  }\r\n\r\n#notification-list[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    white-space: normal;\r\n    min-width: 25rem;\r\n  }\r\n\r\n#notification-list[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]:empty {\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 0.5rem;\r\n    top: 0.5rem;\r\n    background-color: #f35958;\r\n    height: 1.4rem;\r\n  }\r\n\r\n#notification-list[_ngcontent-%COMP%]   em.since[_ngcontent-%COMP%] {\r\n    font-size: 0.7em;\r\n    color: #646C82;\r\n  }\r\n\r\n\r\n\r\n#nav-profile[_ngcontent-%COMP%] {\r\n    margin: 0.5em;\r\n    margin-left: 1em;\r\n    float: right;\r\n  }\r\n\r\n#nav-profile[_ngcontent-%COMP%]   button.thumbnail[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n  }\r\n\r\n#nav-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-height: 2.3em;\r\n  }\r\n\r\n\r\n\r\n#side-menu[_ngcontent-%COMP%] {\r\n    background-color: #1b1e24;\r\n    padding-top: 7.2rem;\r\n    height: 100%;\r\n    position: fixed;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   .profile-block[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   .profile-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 70px;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   .profile-title[_ngcontent-%COMP%] {\r\n    color: #FFF;\r\n    margin-left: 1rem;\r\n    font-size: 1.5em;\r\n    vertical-align: middle;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   .profile-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #8b91a0;\r\n    cursor: pointer;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n    color: #FFF;\r\n    background-color: inherit;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\r\n    margin-right: 0.7rem;\r\n    cursor: pointer;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .glyphicon.pull-right[_ngcontent-%COMP%] {\r\n    margin-top: 0.2rem;\r\n    will-change: transform;\r\n    cursor: pointer;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus   .glyphicon.pull-right[_ngcontent-%COMP%] {\r\n    transform: rotate(-90deg);\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n    background-color: #1ca095;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   .nav-divider[_ngcontent-%COMP%] {\r\n    background-color: #252830;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background-color: #2b303b;\r\n    padding: 1rem;\r\n    margin-bottom: 0.3rem;\r\n    border-radius: 0.25em;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    background-color: #434857;\r\n  }\r\n\r\n\r\n\r\n#main[_ngcontent-%COMP%] {\r\n    padding-top: 7.2rem;\r\n    display: flex;\r\n    align-items: stretch;\r\n    flex-flow: row wrap;\r\n    height: 100%;\r\n    \r\n  }\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    border-radius: 0.25em;\r\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\r\n    background-color: #FFF;\r\n    margin: 1.25rem;\r\n    flex-grow: 5;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n    color: #252830;\r\n  }\r\n\r\n.card-block[_ngcontent-%COMP%] {\r\n    padding: 2rem;\r\n  }\r\n\r\n.card-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    margin-bottom: 1.5rem;\r\n    color: #252830;\r\n  }\r\n\r\n\r\n\r\n.round-chart[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n  }\r\n\r\n.round-chart[_ngcontent-%COMP%]    + .round-chart[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n\r\n.round-chart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 3em;\r\n    font-weight: 100;\r\n    line-height: 1.7rem;\r\n    width: 12rem;\r\n    height: 4.4rem;\r\n    text-align: center;\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n\r\n.round-chart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    font-weight: 400;\r\n  }\r\n\r\n\r\n\r\n#quick-info[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n#quick-info[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    line-height: 3rem;\r\n    border-bottom: 0.1rem solid #e5e9ec;\r\n  }\r\n\r\n#quick-info[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n    font-weight: 300;\r\n  }\r\n\r\n#quick-info[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-weight: 300;\r\n    float: right;\r\n    color: #8b91a0;\r\n  }\r\n\r\n\r\n\r\n#performance-eval[_ngcontent-%COMP%]   .spider-chart[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 264px;\r\n  }\r\n\r\n.highcharts-container[_ngcontent-%COMP%], .highcharts-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    overflow: visible !important;\r\n    margin: auto;\r\n  }\r\n\r\n\r\n\r\n#ration-stock[_ngcontent-%COMP%]   .stacked-area[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n  }\r\n\r\n#ration-stock[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%] {\r\n    font-weight: 300;\r\n    color: #8b91a0;\r\n    padding: 0.5rem 0;\r\n  }\r\n\r\n#ration-stock[_ngcontent-%COMP%]   .switchery[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n\r\n\r\n\r\n#real-time[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    font-size: 1.8rem;\r\n    font-weight: 300;\r\n    border-bottom: 0.1rem solid #e5e9ec;\r\n    padding: 0.5rem 0;\r\n  }\r\n\r\n#real-time[_ngcontent-%COMP%]   .badge.ok[_ngcontent-%COMP%] {\r\n    background-color: #1bc98e;\r\n  }\r\n\r\n#real-time[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], #real-time[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n    color: #FFF;\r\n  }\r\n\r\n#real-time[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], #real-time[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n    margin-top: 0.25rem;\r\n  }\r\n\r\n\r\n\r\n#daily-usage[_ngcontent-%COMP%]   .area-chart[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n  }\r\n\r\n\r\n\r\n#nav-menu[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n\r\n#nav-menu.navbar-collapse[_ngcontent-%COMP%] {\r\n    max-height: 39rem;\r\n  }\r\n\r\n#nav-menu[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\r\n    height: 0.1rem;\r\n    margin: 0.9rem 0;\r\n    overflow: hidden;\r\n    background-color: #e5e5e5;\r\n  }\r\n\r\n@media(max-width:48em){\r\n    #nav-menu[_ngcontent-%COMP%] {\r\n      float: none;\r\n    }\r\n  \r\n    form#search[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  \r\n    .round-chart[_ngcontent-%COMP%], .round-chart[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\r\n      display: block;\r\n      margin: auto;\r\n    }\r\n  \r\n    .round-chart[_ngcontent-%COMP%]    + .round-chart[_ngcontent-%COMP%] {\r\n      margin-top: 2rem;\r\n      float: none;\r\n    }\r\n  \r\n    #notification-list[_ngcontent-%COMP%] {\r\n      margin: 1.25rem;\r\n      margin-left: 2rem;\r\n      background-color: #e5e9ec;\r\n    }\r\n  \r\n    #notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      background-color: #FFF;\r\n      opacity: 1;\r\n    }\r\n  \r\n    #btn-notifications[_ngcontent-%COMP%], #btn-notifications[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      text-align: left;\r\n    }\r\n  \r\n    #nav-menu[_ngcontent-%COMP%]   #btn-notifications[_ngcontent-%COMP%]    > .badge[_ngcontent-%COMP%] {\r\n      right: inherit;\r\n      left: 10rem;\r\n    }\r\n  }\r\n\r\n\r\n\r\n#content[_ngcontent-%COMP%] {\r\n    height: 30em;\r\n    overflow: auto;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]{\r\n    z-index: 999999999999999999999999;\r\n  }\r\n\r\n.navbar-header[_ngcontent-%COMP%]{\r\n    z-index: 999999;\r\n  }\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    position: relative;\r\n    top: -10%;\r\n  }\r\n\r\n.header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    margin-top:28px ;\r\n  }\r\n\r\n.contant[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 25px;\r\n    height: 80px;\r\n  }\r\n\r\n.contant[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border-radius: 70%;\r\n  }\r\n\r\n.contant[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n   \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTs7QUFFVjtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0VBQzNCOztBQUVBLG9CQUFvQjs7QUFDcEI7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztBQUVBO0lBQ0UseUJBQXlCO0lBRXpCLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztFQUNiOztBQUVBLGFBQWE7O0FBQ2I7SUFDRSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCO0VBQ0Y7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUEsa0JBQWtCOztBQUNsQjtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFFRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7RUFDYjs7QUFFQSxXQUFXOztBQUNYO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7QUFFQSw2QkFBNkI7O0FBQzdCO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsU0FBUztJQUNULFdBQVc7RUFDYjs7QUFFQTs7SUFFRSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztBQUVBO0lBRUUsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixVQUFVO0VBQ1o7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0FBRUEsY0FBYzs7QUFDZDtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztBQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0VBQ1g7O0FBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUEsWUFBWTs7QUFDWjtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7O0FBRUE7O0lBRUUsV0FBVztJQUNYLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLG9CQUFvQjtJQUNwQixlQUFlO0VBQ2pCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0VBQ2pCOztBQUVBO0lBS0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQix5QkFBeUI7RUFDM0I7O0FBRUEsZUFBZTs7QUFDZjtJQUNFLG1CQUFtQjtJQUVuQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixZQUFZOztFQUVkOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwyQ0FBMkM7SUFDM0Msc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0UsU0FBUztJQUNULHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztBQUVBLGNBQWM7O0FBQ2Q7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztBQUVBLGFBQWE7O0FBQ2I7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQ0FBbUM7RUFDckM7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0FBRUEseUJBQXlCOztBQUN6QjtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7O0FBRUE7O0lBRUUsNEJBQTRCO0lBQzVCLFlBQVk7RUFDZDs7QUFFQSxlQUFlOztBQUNmO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUEsWUFBWTs7QUFDWjtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTs7SUFFRSxXQUFXO0VBQ2I7O0FBRUE7O0lBRUUsbUJBQW1CO0VBQ3JCOztBQUVBLGNBQWM7O0FBQ2Q7SUFDRSxhQUFhO0VBQ2Y7O0FBRUEsZ0JBQWdCOztBQUNoQjtJQUNFLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFO01BQ0UsV0FBVztJQUNiOztJQUVBO01BQ0UsYUFBYTtJQUNmOztJQUVBOztNQUVFLGNBQWM7TUFDZCxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsV0FBVztJQUNiOztJQUVBO01BQ0UsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQix5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSxzQkFBc0I7TUFDdEIsVUFBVTtJQUNaOztJQUVBOztNQUVFLFdBQVc7TUFDWCxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxjQUFjO01BQ2QsV0FBVztJQUNiO0VBQ0Y7O0FBRUEsZ0JBQWdCOztBQUNoQjtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztBQUNBO0lBQ0UsaUNBQWlDO0VBQ25DOztBQUNBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixTQUFTO0VBQ1g7O0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0UsWUFBWTs7RUFFZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypsb2FkaW5nKi9cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTllYztcclxuICB9XHJcbiAgXHJcbiAgLypuYXYgdG9wIGxlZnQgbWVudSovXHJcbiAgbmF2Lm5hdmJhci1maXhlZC10b3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgbmF2IC50b3AtbGVmdC1tZW51IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI4MzA7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZiYXItYnJhbmQgaDEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICB9XHJcbiAgXHJcbiAgbmF2IC5oZWFkZXItYnV0dG9ucyB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICBcclxuICAvKm5hZyB0b2dnbGUqL1xyXG4gIC5uYXZiYXItdG9nZ2xlIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzI1MjgzMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU5ZWM7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZiYXItdG9nZ2xlIC5pY29uLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyODMwO1xyXG4gIH1cclxuICBcclxuICAvKm5hdiBzZWFyY2ggZm9ybSovXHJcbiAgbmF2IGZvcm0jc2VhcmNoIHtcclxuICAgIHBhZGRpbmc6IDAuOWVtO1xyXG4gIH1cclxuICBcclxuICBuYXYgZm9ybSNzZWFyY2ggLmlucHV0LWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBuYXYgZm9ybSNzZWFyY2ggLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMS45ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgbmF2IGZvcm0jc2VhcmNoIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgbmF2IGZvcm0jc2VhcmNoIC5nbHlwaGljb24tc2VhcmNoIHtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgbGVmdDogMS43ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC8qbmF2IG1lbnUqL1xyXG4gIG5hdiAjbmF2LW1lbnUge1xyXG4gICAgcGFkZGluZzogMC40ZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgfVxyXG4gIFxyXG4gIC8qbmF2IG1lbnUgYW5kIG5vdGlmaWNhdGlvbnMqL1xyXG4gICNuYXYtbWVudSAjYnRuLW5vdGlmaWNhdGlvbnMgPiAuYmFkZ2Uge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM1OTU4O1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjU1cmVtIDAuM3JlbSAwLjVyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTAuNHJlbTtcclxuICAgIHRvcDogMXJlbTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuICBcclxuICAjYnRuLW5vdGlmaWNhdGlvbnMgLmJ0bi1saW5rLFxyXG4gICNuYXYtbWVudSBsaSBhIHtcclxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgICBjb2xvcjogIzI1MjgzMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gICNidG4tbm90aWZpY2F0aW9ucyAuYnRuLWxpbms6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAjbm90aWZpY2F0aW9uLWxpc3Qge1xyXG4gICAgbWF4LWhlaWdodDogMjBlbTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAjbm90aWZpY2F0aW9uLWxpc3QgYSB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgbWFyZ2luOiAxLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4zcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZFRjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgI25vdGlmaWNhdGlvbi1saXN0IGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMyNjI2MjY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAjbm90aWZpY2F0aW9uLWxpc3QgaW1nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgfVxyXG4gIFxyXG4gICNub3RpZmljYXRpb24tbGlzdCAubm90aWZpY2F0aW9uLW1lc3NhZ2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIG1pbi13aWR0aDogMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gICNub3RpZmljYXRpb24tbGlzdCAuYmFkZ2U6ZW1wdHkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDAuNXJlbTtcclxuICAgIHRvcDogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzNTk1ODtcclxuICAgIGhlaWdodDogMS40cmVtO1xyXG4gIH1cclxuICBcclxuICAjbm90aWZpY2F0aW9uLWxpc3QgZW0uc2luY2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIGNvbG9yOiAjNjQ2QzgyO1xyXG4gIH1cclxuICBcclxuICAvKm5hdiBvcHRpb25zKi9cclxuICAjbmF2LXByb2ZpbGUge1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gICNuYXYtcHJvZmlsZSBidXR0b24udGh1bWJuYWlsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNuYXYtcHJvZmlsZSBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogMi4zZW07XHJcbiAgfVxyXG4gIFxyXG4gIC8qc2lkZSBtZW51Ki9cclxuICAjc2lkZS1tZW51IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFlMjQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNy4ycmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIH1cclxuICBcclxuICAjc2lkZS1tZW51IC5wcm9maWxlLWJsb2NrID4gKiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlLW1lbnUgLnByb2ZpbGUtYmxvY2sgaW1nIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gIH1cclxuICBcclxuICAjc2lkZS1tZW51IC5wcm9maWxlLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSAucHJvZmlsZS10aXRsZSBzbWFsbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgYSB7XHJcbiAgICBjb2xvcjogIzhiOTFhMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgYTpob3ZlcixcclxuICAjc2lkZS1tZW51IHVsLm5hdiBhOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgYSAuZ2x5cGhpY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAjc2lkZS1tZW51IHVsLm5hdiBhIC5nbHlwaGljb24ucHVsbC1yaWdodCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAjc2lkZS1tZW51IHVsLm5hdiBhOmZvY3VzIC5nbHlwaGljb24ucHVsbC1yaWdodCB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gIH1cclxuICBcclxuICAjc2lkZS1tZW51IHVsLm5hdiBhIC5iYWRnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNhMDk1O1xyXG4gIH1cclxuICBcclxuICAjc2lkZS1tZW51IHVsLm5hdiAubmF2LWRpdmlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjgzMDtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgdWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgdWwgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjMwM2I7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gIH1cclxuICBcclxuICAjc2lkZS1tZW51IHVsLm5hdiB1bCBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzQ4NTc7XHJcbiAgfVxyXG4gIFxyXG4gIC8qbWFpbiBjb250ZW50Ki9cclxuICAjbWFpbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNy4ycmVtO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMzcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIG1hcmdpbjogMS4yNXJlbTtcclxuICAgIGZsZXgtZ3JvdzogNTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQgKiB7XHJcbiAgICBjb2xvcjogIzI1MjgzMDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYmxvY2sge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYmxvY2sgaDIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgY29sb3I6ICMyNTI4MzA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qcm91bmQgY2hhcnQqL1xyXG4gIC5yb3VuZC1jaGFydCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZC1jaGFydCArIC5yb3VuZC1jaGFydCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3VuZC1jaGFydCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjdyZW07XHJcbiAgICB3aWR0aDogMTJyZW07XHJcbiAgICBoZWlnaHQ6IDQuNHJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLnJvdW5kLWNoYXJ0IHNwYW4gPiBzbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICAvKnF1aWNrIGluZm8qL1xyXG4gICNxdWljay1pbmZvIC5jYXJkLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAjcXVpY2staW5mbyAucXVpY2stc3RhdHMge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgI2U1ZTllYztcclxuICB9XHJcbiAgXHJcbiAgI3F1aWNrLWluZm8gLnF1aWNrLXN0YXRzIHN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICBcclxuICAjcXVpY2staW5mbyAucXVpY2stc3RhdHMgc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM4YjkxYTA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qcGVyZm9ybWFuY2UgZXZhbHVhdGlvbiovXHJcbiAgI3BlcmZvcm1hbmNlLWV2YWwgLnNwaWRlci1jaGFydCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDI2NHB4O1xyXG4gIH1cclxuICBcclxuICAuaGlnaGNoYXJ0cy1jb250YWluZXIsXHJcbiAgLmhpZ2hjaGFydHMtY29udGFpbmVyIHN2ZyB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAvKnJhdGlvbiBzdG9jayovXHJcbiAgI3JhdGlvbi1zdG9jayAuc3RhY2tlZC1hcmVhIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNyYXRpb24tc3RvY2sgLnN3aXRjaCB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICM4YjkxYTA7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICB9XHJcbiAgXHJcbiAgI3JhdGlvbi1zdG9jayAuc3dpdGNoZXJ5IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLypyZWFsIHRpbWUqL1xyXG4gICNyZWFsLXRpbWUgbGkge1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICNlNWU5ZWM7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICB9XHJcbiAgXHJcbiAgI3JlYWwtdGltZSAuYmFkZ2Uub2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiYzk4ZTtcclxuICB9XHJcbiAgXHJcbiAgI3JlYWwtdGltZSAuYmFkZ2Ugc3BhbixcclxuICAjcmVhbC10aW1lIC5sYWJlbCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICB9XHJcbiAgXHJcbiAgI3JlYWwtdGltZSAuYmFkZ2UsXHJcbiAgI3JlYWwtdGltZSAubGFiZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLypkYWlseSB1c2FnZSovXHJcbiAgI2RhaWx5LXVzYWdlIC5hcmVhLWNoYXJ0IHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qZml4aW5nIG1vYmlsZSovXHJcbiAgI25hdi1tZW51IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgI25hdi1tZW51Lm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzOXJlbTtcclxuICB9XHJcbiAgXHJcbiAgI25hdi1tZW51IC5kaXZpZGVyIHtcclxuICAgIGhlaWdodDogMC4xcmVtO1xyXG4gICAgbWFyZ2luOiAwLjlyZW0gMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEobWF4LXdpZHRoOjQ4ZW0pe1xyXG4gICAgI25hdi1tZW51IHtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmb3JtI3NlYXJjaCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucm91bmQtY2hhcnQsXHJcbiAgICAucm91bmQtY2hhcnQgY2FudmFzIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICBcclxuICAgIC5yb3VuZC1jaGFydCArIC5yb3VuZC1jaGFydCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI25vdGlmaWNhdGlvbi1saXN0IHtcclxuICAgICAgbWFyZ2luOiAxLjI1cmVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTllYztcclxuICAgIH1cclxuICBcclxuICAgICNub3RpZmljYXRpb24tbGlzdCBhIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICBcclxuICAgICNidG4tbm90aWZpY2F0aW9ucyxcclxuICAgICNidG4tbm90aWZpY2F0aW9ucyA+IGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI25hdi1tZW51ICNidG4tbm90aWZpY2F0aW9ucyA+IC5iYWRnZSB7XHJcbiAgICAgIHJpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBsZWZ0OiAxMHJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyphdWRpZW5jZS5odG1sKi9cclxuICAjY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDMwZW07XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgI3NpZGUtbWVudXtcclxuICAgIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTtcclxuICB9XHJcbiAgLm5hdmJhci1oZWFkZXJ7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXJ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xMCU7XHJcbiAgfVxyXG4gIC5oZWFkZXIgaXtcclxuICAgIG1hcmdpbi10b3A6MjhweCA7XHJcbiAgfVxyXG4gIC5jb250YW50e1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG4gIC5jb250YW50IGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDcwJTtcclxuICB9IFxyXG4gIC5jb250YW50IGgze1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICBcclxuICB9ICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "M0yB":
/*!*************************************************************!*\
  !*** ./src/app/components/real-time/real-time.component.ts ***!
  \*************************************************************/
/*! exports provided: RealTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealTimeComponent", function() { return RealTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RealTimeComponent {
    constructor() { }
    ngOnInit() {
    }
}
RealTimeComponent.ɵfac = function RealTimeComponent_Factory(t) { return new (t || RealTimeComponent)(); };
RealTimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RealTimeComponent, selectors: [["app-real-time"]], inputs: { unitHeight: "unitHeight", item: "item" }, decls: 29, vars: 0, consts: [["id", "real-time", 1, "card"], [1, "card-block"], [1, "list-unstyled"], [1, "label", "label-warning", "pull-right"], [1, "badge", "ok", "pull-right"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-ok"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-success", 2, "width", "25%"], [1, "sr-only"], ["role", "progressbar", "aria-valuenow", "38", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-warning", "progress-bar-striped", "active", 2, "width", "38%"], ["role", "progressbar", "aria-valuenow", "5", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-danger", 2, "width", "5%"], [1, "pull-right"]], template: function RealTimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Real time information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Active dogs: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "255");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Silo status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Usage level: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "38% alocated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "5% reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Free space: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " 32% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card-block[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\n.quick-stats[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 2rem;\r\n    line-height: 3rem;\r\n    border-bottom: 0.1rem solid #e5e9ec;\r\n}\r\n.quick-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{\r\n    font-weight: 300;\r\n}\r\n.quick-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-weight: 300;\r\n    float: right;\r\n    color: #8b91a0;\r\n}\r\n.card[_ngcontent-%COMP%], .card-block[_ngcontent-%COMP%]{\r\n    border-radius: 10px;\r\n}\r\n.item[_ngcontent-%COMP%]{\r\n    border: 1px solid;\r\n    padding: 10px;\r\n    box-shadow: 5px 10px #888888;\r\n    border-radius: 10px;\r\n    margin-top: 20px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWFsLXRpbWUvcmVhbC10aW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVhbC10aW1lL3JlYWwtdGltZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYmxvY2t7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5xdWljay1zdGF0c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjZTVlOWVjO1xyXG59XHJcbi5xdWljay1zdGF0cyBzdHJvbmd7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbi5xdWljay1zdGF0cyBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjOGI5MWEwO1xyXG59XHJcbi5jYXJkLC5jYXJkLWJsb2Nre1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uaXRlbXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4ICM4ODg4ODg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealTimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-real-time',
                templateUrl: './real-time.component.html',
                styleUrls: ['./real-time.component.css']
            }]
    }], function () { return []; }, { unitHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "SjkG":
/*!*********************************************************!*\
  !*** ./src/app/components/overall/overall.component.ts ***!
  \*********************************************************/
/*! exports provided: OverallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverallComponent", function() { return OverallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highstock */ "5ZEx");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ "kAVD");




class OverallComponent {
    constructor() {
        this.Highcharts = highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
            chart: {
                events: {
                    render: (e) => {
                        const chart = e.target;
                        console.log(chart);
                        console.log(this.getText());
                    }
                }
            },
            series: [
                {
                    type: "line",
                    data: [1, 2, 3, 4, 5]
                }
            ]
        };
    }
    getText() {
        return 'some text';
    }
}
OverallComponent.ɵfac = function OverallComponent_Factory(t) { return new (t || OverallComponent)(); };
OverallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverallComponent, selectors: [["app-overall"]], inputs: { unitHeight: "unitHeight", item: "item" }, decls: 1, vars: 2, consts: [[3, "Highcharts", "options"]], template: function OverallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "highcharts-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3ZlcmFsbC9vdmVyYWxsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-overall',
                templateUrl: './overall.component.html',
                styleUrls: ['./overall.component.css']
            }]
    }], null, { unitHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Wb8a":
/*!*******************************************************!*\
  !*** ./src/app/components/ration/ration.component.ts ***!
  \*******************************************************/
/*! exports provided: RationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RationComponent", function() { return RationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highstock */ "5ZEx");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ "kAVD");




class RationComponent {
    constructor() {
        this.Highcharts = highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
            chart: {
                zoomType: 'xy',
                style: {
                    fontFamily: 'Segoe UI',
                },
                height: 300,
            },
            legend: { enabled: false },
            plotOptions: {
                series: {
                    events: {
                        legendItemClick: () => {
                            return false;
                        },
                    },
                    states: {
                        inactive: {
                            opacity: 1,
                        },
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            return 'test';
                        },
                    },
                    cursor: 'pointer',
                },
                column: {
                    point: {
                        events: {
                            click: (event) => {
                                // click to open drilldown
                            },
                        },
                    },
                },
            },
            exporting: {
                enabled: false,
            },
            title: {
                text: '',
            },
            credits: {
                enabled: false,
            },
            xAxis: [
                {
                    categories: ['cat 1', 'cat 2', 'cat 3', 'cat 4'],
                    crosshair: true,
                },
            ],
            yAxis: [
                {
                    labels: {
                        style: {
                            color: '#666666',
                        },
                    },
                    title: {
                        text: '',
                    },
                    endOnTick: true,
                },
            ],
            tooltip: {
                shared: false,
            },
            series: [
                {
                    name: 'Name 1',
                    data: [32532950.02, 4563950.2, 121780820.81, 1480505.42],
                    color: 'rgba(102,0,102,0.5)',
                    pointPlacement: 0.05,
                    zIndex: 1,
                    type: 'column',
                },
                {
                    name: 'Name 2',
                    data: [32532950.02, 4563950.2, 121780820.81, 14805050.42],
                    color: 'rgba(102,0,102,1)',
                    pointPlacement: -0.05,
                    zIndex: 2,
                    type: 'column',
                },
            ],
        };
    }
    getText() {
        return 'some text';
    }
    // formatterFunction(this): string {
    //   return this.y;
    // }
    formatNumber(numberToFormat) {
        return numberToFormat.toString() + 'M';
    }
}
RationComponent.ɵfac = function RationComponent_Factory(t) { return new (t || RationComponent)(); };
RationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RationComponent, selectors: [["app-ration"]], inputs: { unitHeight: "unitHeight", item: "item" }, decls: 1, vars: 2, consts: [[3, "Highcharts", "options"]], template: function RationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "highcharts-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmF0aW9uL3JhdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ration',
                templateUrl: './ration.component.html',
                styleUrls: ['./ration.component.css']
            }]
    }], null, { unitHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "YhXI":
/*!*****************************************************!*\
  !*** ./src/app/components/quick/quick.component.ts ***!
  \*****************************************************/
/*! exports provided: QuickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickComponent", function() { return QuickComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class QuickComponent {
    constructor() { }
}
QuickComponent.ɵfac = function QuickComponent_Factory(t) { return new (t || QuickComponent)(); };
QuickComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuickComponent, selectors: [["app-quick"]], inputs: { unitHeight: "unitHeight", item: "item" }, decls: 34, vars: 0, consts: [["id", "quick-info", 1, "card"], [1, "card-block"], [1, "quick-stats"]], template: function QuickComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quick stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Today:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "78");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "This month:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "459");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "All time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "54k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bounce rate:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "81.08%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Session duration:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "00:01:41");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "New session:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "63.86%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card-block[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\n.quick-stats[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 2rem;\r\n    line-height: 3rem;\r\n    border-bottom: 0.1rem solid #e5e9ec;\r\n}\r\n.quick-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{\r\n    font-weight: 300;\r\n}\r\n.quick-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-weight: 300;\r\n    float: right;\r\n    color: #8b91a0;\r\n}\r\n.card[_ngcontent-%COMP%], .card-block[_ngcontent-%COMP%]{\r\n    border-radius: 10px;\r\n}\r\n.item[_ngcontent-%COMP%]{\r\n    border: 1px solid;\r\n    padding: 10px;\r\n    box-shadow: 5px 10px #888888;\r\n    border-radius: 10px;\r\n    margin-top: 20px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWljay9xdWljay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLGdCQUFnQjs7QUFFcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3F1aWNrL3F1aWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ibG9ja3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnF1aWNrLXN0YXRze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICNlNWU5ZWM7XHJcbn1cclxuLnF1aWNrLXN0YXRzIHN0cm9uZ3tcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuLnF1aWNrLXN0YXRzIHNwYW57XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM4YjkxYTA7XHJcbn1cclxuLmNhcmQsLmNhcmQtYmxvY2t7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5pdGVte1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggIzg4ODg4ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuickComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quick',
                templateUrl: './quick.component.html',
                styleUrls: ['./quick.component.css']
            }]
    }], function () { return []; }, { unitHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-gridster2 */ "Ljk9");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _components_over_view_over_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/over-view/over-view.component */ "57pk");
/* harmony import */ var _components_audience_audience_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/audience/audience.component */ "//Ya");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/error/error.component */ "7AdY");
/* harmony import */ var _components_gridstar_gridstar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/gridstar/gridstar.component */ "Zt0K");
/* harmony import */ var _components_performance_performance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/performance/performance.component */ "rk5b");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highcharts-angular */ "kAVD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_quick_quick_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/quick/quick.component */ "YhXI");
/* harmony import */ var _components_overall_overall_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/overall/overall.component */ "SjkG");
/* harmony import */ var _components_ration_ration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/ration/ration.component */ "Wb8a");
/* harmony import */ var _components_real_time_real_time_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/real-time/real-time.component */ "M0yB");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/map/map.component */ "EZtS");
/* harmony import */ var _components_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/scroll/scroll.component */ "GyMa");
/* harmony import */ var _components_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/presentation/presentation.component */ "5BKs");























_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            angular_gridster2__WEBPACK_IMPORTED_MODULE_4__["GridsterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_12__["HighchartsChartModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        _components_over_view_over_view_component__WEBPACK_IMPORTED_MODULE_7__["OverViewComponent"],
        _components_audience_audience_component__WEBPACK_IMPORTED_MODULE_8__["AudienceComponent"],
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
        _components_gridstar_gridstar_component__WEBPACK_IMPORTED_MODULE_10__["GridstarComponent"],
        _components_performance_performance_component__WEBPACK_IMPORTED_MODULE_11__["PerformanceComponent"],
        _components_quick_quick_component__WEBPACK_IMPORTED_MODULE_15__["QuickComponent"],
        _components_overall_overall_component__WEBPACK_IMPORTED_MODULE_16__["OverallComponent"],
        _components_ration_ration_component__WEBPACK_IMPORTED_MODULE_17__["RationComponent"],
        _components_real_time_real_time_component__WEBPACK_IMPORTED_MODULE_18__["RealTimeComponent"],
        _components_map_map_component__WEBPACK_IMPORTED_MODULE_19__["MapComponent"],
        _components_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_20__["ScrollComponent"],
        _components_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_21__["PresentationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        angular_gridster2__WEBPACK_IMPORTED_MODULE_4__["GridsterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        highcharts_angular__WEBPACK_IMPORTED_MODULE_12__["HighchartsChartModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                    _components_over_view_over_view_component__WEBPACK_IMPORTED_MODULE_7__["OverViewComponent"],
                    _components_audience_audience_component__WEBPACK_IMPORTED_MODULE_8__["AudienceComponent"],
                    _components_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
                    _components_gridstar_gridstar_component__WEBPACK_IMPORTED_MODULE_10__["GridstarComponent"],
                    _components_performance_performance_component__WEBPACK_IMPORTED_MODULE_11__["PerformanceComponent"],
                    _components_quick_quick_component__WEBPACK_IMPORTED_MODULE_15__["QuickComponent"],
                    _components_overall_overall_component__WEBPACK_IMPORTED_MODULE_16__["OverallComponent"],
                    _components_ration_ration_component__WEBPACK_IMPORTED_MODULE_17__["RationComponent"],
                    _components_real_time_real_time_component__WEBPACK_IMPORTED_MODULE_18__["RealTimeComponent"],
                    _components_map_map_component__WEBPACK_IMPORTED_MODULE_19__["MapComponent"],
                    _components_scroll_scroll_component__WEBPACK_IMPORTED_MODULE_20__["ScrollComponent"],
                    _components_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_21__["PresentationComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    angular_gridster2__WEBPACK_IMPORTED_MODULE_4__["GridsterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    highcharts_angular__WEBPACK_IMPORTED_MODULE_12__["HighchartsChartModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zt0K":
/*!***********************************************************!*\
  !*** ./src/app/components/gridstar/gridstar.component.ts ***!
  \***********************************************************/
/*! exports provided: GridstarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridstarComponent", function() { return GridstarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-gridster2 */ "Ljk9");
/* harmony import */ var _performance_performance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../performance/performance.component */ "rk5b");




const _c0 = ["gridsterItem"];
class GridstarComponent {
    constructor() {
        this.unitHeight = 0;
        this.item1 = { x: 0, y: 0, rows: 3, cols: 5 };
        this.item2 = { x: 6, y: 3, rows: 2, cols: 2 };
        this.item3 = { x: 5, y: 2, rows: 2, cols: 3 };
        this.item4 = { x: 3, y: 4, rows: 3, cols: 4 };
        this.options = {
            itemResizeCallback: this.itemResize.bind(this),
            pushItems: true,
            minCols: 12,
            maxCols: 12,
            minRows: 5,
            fixedRowHeight: 120,
            gridType: 'scrollVertical',
            resizable: {
                enabled: true
            },
            draggable: {
                enabled: true
            }
        };
    }
    itemResize(item, itemComponent) {
        console.log('update', item);
        if (itemComponent.gridster.curRowHeight > 1) {
            this.unitHeight = itemComponent.gridster.curRowHeight;
        }
        itemComponent.gridster.curRowHeight += (item.cols * 100 - item.rows) / 10000;
    }
    ngOnChanges(changes) {
    }
}
GridstarComponent.ɵfac = function GridstarComponent_Factory(t) { return new (t || GridstarComponent)(); };
GridstarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridstarComponent, selectors: [["app-gridstar"]], viewQuery: function GridstarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gridItem = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 13, consts: [[3, "options"], [3, "item"], ["gridsterItem", ""], [3, "unitHeight", "item"]], template: function GridstarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gridster", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "gridster-item", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-performance", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "gridster-item", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-performance", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "gridster-item", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-performance", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "gridster-item", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-performance", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.item1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unitHeight", ctx.unitHeight)("item", ctx.item1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.item2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unitHeight", ctx.unitHeight)("item", ctx.item2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.item3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unitHeight", ctx.unitHeight)("item", ctx.item3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.item4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("unitHeight", ctx.unitHeight)("item", ctx.item4);
    } }, directives: [angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridsterComponent"], angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridsterItemComponent"], _performance_performance_component__WEBPACK_IMPORTED_MODULE_2__["PerformanceComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JpZHN0YXIvZ3JpZHN0YXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridstarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gridstar',
                templateUrl: './gridstar.component.html',
                styleUrls: ['./gridstar.component.css'],
            }]
    }], function () { return []; }, { gridItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gridsterItem']
        }] }); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 101, vars: 0, consts: [[1, "loading"], [1, "navbar", "navbar-fixed-top"], [1, "container-fluid"], [1, "row"], [1, "col-sm-3", "top-left-menu"], [1, "navbar-header"], ["href", "dashboard.html", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#nav-menu", "aria-expanded", "false", 1, "navbar-toggle", "collapsed"], [1, "sr-only"], [1, "icon-bar"], ["href", "#", "id", "search-icon", "data-toggle", "tooltip", "data-placement", "bottom", "data-delay", "500", "title", "Display search bar", 1, "header-buttons", "pull-right", "visible-xs"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-search"], ["href", "#", "data-toggle", "tooltip", "data-placement", "bottom", "data-delay", "500", "title", "Refresh data", 1, "header-buttons", "pull-right"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-repeat"], ["id", "search", "role", "search", 1, "col-sm-3"], [1, "input-group"], ["type", "text", "placeholder", "Search...", 1, "form-control", "transition"], ["id", "nav-menu", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], ["id", "btn-notifications", 1, "btn-group"], [1, "badge"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-link", "dropdown-toggle"], ["id", "notification-list", 1, "dropdown-menu", "pull-right"], ["href", "#"], ["src", "assets/imgs/laika.jpg", 1, "img-circle"], [1, "notification-message"], [1, "since"], ["src", "assets/imgs/cat.jpg", 1, "img-circle"], ["src", "assets/imgs/doge.jpg", 1, "img-circle"], [1, "visible-xs"], ["role", "separator", 1, "divider", "visible-xs"], ["id", "nav-profile", 1, "btn-group", "pull-right", "hidden-xs"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-link", "dropdown-toggle", "thumbnail"], ["src", "imgs/jon.png", 1, "img-circle"], [1, "dropdown-menu"], ["href", "settings.html"], ["role", "separator", 1, "divider"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Toggle navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Laika");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Hey! How are you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "em", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Devil cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "I will never forgive you...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "em", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "6h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Doge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "What are you doing? So scare. It's alright now.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "em", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Audience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Finances");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Realtime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ul", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 100%;\r\n    background-color: #e5e9ec;\r\n  }\r\n\r\n\r\n\r\nnav.navbar-fixed-top[_ngcontent-%COMP%] {\r\n    background-color: #FFF;\r\n    border: none;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   .top-left-menu[_ngcontent-%COMP%] {\r\n    background-color: #252830;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    z-index: 99999999999999;\r\n  }\r\n\r\n.navbar-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: 1.5em;\r\n    font-weight: 300;\r\n    color: #FFF;\r\n    z-index: 99999999999999;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    color: #FFF;\r\n  }\r\n\r\n\r\n\r\n.navbar-toggle[_ngcontent-%COMP%] {\r\n    border-color: #252830;\r\n    background-color: #e5e9ec;\r\n    margin-top: 13px\r\n  }\r\n\r\n.navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\r\n    background-color: #252830;\r\n  }\r\n\r\n\r\n\r\nnav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%] {\r\n    padding: 0.9em;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    border-radius: 0.25em;\r\n    border: none;\r\n    width: 70%;\r\n    padding-left: 1.9em;\r\n    background-color: #F3F3F3;\r\n    box-shadow: none;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n    width: 100%;\r\n    box-shadow: none;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%]   .glyphicon-search[_ngcontent-%COMP%] {\r\n    z-index: 99;\r\n    left: 1.7em;\r\n  }\r\n\r\n\r\n\r\nnav[_ngcontent-%COMP%]   #nav-menu[_ngcontent-%COMP%] {\r\n    padding: 0.4em;\r\n    padding-right: 1em;\r\n  }\r\n\r\n\r\n\r\n#nav-menu[_ngcontent-%COMP%]   #btn-notifications[_ngcontent-%COMP%]    > .badge[_ngcontent-%COMP%] {\r\n    color: #FFF;\r\n    background-color: #f35958;\r\n    font-size: 0.7em;\r\n    padding: 0.3rem 0.55rem 0.3rem 0.5rem;\r\n    position: absolute;\r\n    right: -0.4rem;\r\n    top: 1rem;\r\n    z-index: 99;\r\n  }\r\n\r\n#btn-notifications[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%], #nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding-top: 1.5rem;\r\n    color: #252830;\r\n    font-weight: 500;\r\n  }\r\n\r\n#btn-notifications[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n  }\r\n\r\n#notification-list[_ngcontent-%COMP%] {\r\n    max-height: 20em;\r\n    overflow: auto;\r\n  }\r\n\r\n#notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    opacity: 0.7;\r\n    margin: 1.5rem;\r\n    border-radius: 0.5rem;\r\n    padding: 0.5rem 1.3rem;\r\n    background-color: #EFEFEF;\r\n    position: relative;\r\n  }\r\n\r\n#notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #262626;\r\n    text-decoration: none;\r\n    opacity: 1;\r\n  }\r\n\r\n#notification-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    height: 35px;\r\n    width: 35px;\r\n    margin-right: 1em;\r\n    margin-top: 1em;\r\n  }\r\n\r\n#notification-list[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    white-space: normal;\r\n    min-width: 25rem;\r\n  }\r\n\r\n#notification-list[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]:empty {\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 0.5rem;\r\n    top: 0.5rem;\r\n    background-color: #f35958;\r\n    height: 1.4rem;\r\n  }\r\n\r\n#notification-list[_ngcontent-%COMP%]   em.since[_ngcontent-%COMP%] {\r\n    font-size: 0.7em;\r\n    color: #646C82;\r\n  }\r\n\r\n\r\n\r\n#nav-profile[_ngcontent-%COMP%] {\r\n    margin: 0.5em;\r\n    margin-left: 1em;\r\n    float: right;\r\n  }\r\n\r\n#nav-profile[_ngcontent-%COMP%]   button.thumbnail[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n  }\r\n\r\n#nav-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-height: 2.3em;\r\n  }\r\n\r\n\r\n\r\n#side-menu[_ngcontent-%COMP%] {\r\n    background-color: #1b1e24;\r\n    padding-top: 7.2rem;\r\n    height: 100%;\r\n    position: fixed;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   .profile-block[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   .profile-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 70px;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   .profile-title[_ngcontent-%COMP%] {\r\n    color: #FFF;\r\n    margin-left: 1rem;\r\n    font-size: 1.5em;\r\n    vertical-align: middle;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   .profile-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #8b91a0;\r\n    cursor: pointer;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n    color: #FFF;\r\n    background-color: inherit;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\r\n    margin-right: 0.7rem;\r\n    cursor: pointer;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .glyphicon.pull-right[_ngcontent-%COMP%] {\r\n    margin-top: 0.2rem;\r\n    will-change: transform;\r\n    cursor: pointer;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus   .glyphicon.pull-right[_ngcontent-%COMP%] {\r\n    transform: rotate(-90deg);\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n    background-color: #1ca095;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   .nav-divider[_ngcontent-%COMP%] {\r\n    background-color: #252830;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background-color: #2b303b;\r\n    padding: 1rem;\r\n    margin-bottom: 0.3rem;\r\n    border-radius: 0.25em;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    background-color: #434857;\r\n  }\r\n\r\n\r\n\r\n#main[_ngcontent-%COMP%] {\r\n    padding-top: 7.2rem;\r\n    display: flex;\r\n    align-items: stretch;\r\n    flex-flow: row wrap;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    border-radius: 0.25em;\r\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\r\n    background-color: #FFF;\r\n    margin: 1.25rem;\r\n    flex-grow: 5;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\r\n    color: #252830;\r\n  }\r\n\r\n.card-block[_ngcontent-%COMP%] {\r\n    padding: 2rem;\r\n  }\r\n\r\n.card-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    margin-bottom: 1.5rem;\r\n    color: #252830;\r\n  }\r\n\r\n\r\n\r\n.round-chart[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n  }\r\n\r\n.round-chart[_ngcontent-%COMP%]    + .round-chart[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n\r\n.round-chart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 3em;\r\n    font-weight: 100;\r\n    line-height: 1.7rem;\r\n    width: 12rem;\r\n    height: 4.4rem;\r\n    text-align: center;\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n\r\n.round-chart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    font-weight: 400;\r\n  }\r\n\r\n\r\n\r\n#quick-info[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n#quick-info[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    line-height: 3rem;\r\n    border-bottom: 0.1rem solid #e5e9ec;\r\n  }\r\n\r\n#quick-info[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n    font-weight: 300;\r\n  }\r\n\r\n#quick-info[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-weight: 300;\r\n    float: right;\r\n    color: #8b91a0;\r\n  }\r\n\r\n\r\n\r\n#performance-eval[_ngcontent-%COMP%]   .spider-chart[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 264px;\r\n  }\r\n\r\n.highcharts-container[_ngcontent-%COMP%], .highcharts-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    overflow: visible !important;\r\n    margin: auto;\r\n  }\r\n\r\n\r\n\r\n#ration-stock[_ngcontent-%COMP%]   .stacked-area[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n  }\r\n\r\n#ration-stock[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%] {\r\n    font-weight: 300;\r\n    color: #8b91a0;\r\n    padding: 0.5rem 0;\r\n  }\r\n\r\n#ration-stock[_ngcontent-%COMP%]   .switchery[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n\r\n\r\n\r\n#real-time[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    font-size: 1.8rem;\r\n    font-weight: 300;\r\n    border-bottom: 0.1rem solid #e5e9ec;\r\n    padding: 0.5rem 0;\r\n  }\r\n\r\n#real-time[_ngcontent-%COMP%]   .badge.ok[_ngcontent-%COMP%] {\r\n    background-color: #1bc98e;\r\n  }\r\n\r\n#real-time[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], #real-time[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n    color: #FFF;\r\n  }\r\n\r\n#real-time[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], #real-time[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n    margin-top: 0.25rem;\r\n  }\r\n\r\n\r\n\r\n#daily-usage[_ngcontent-%COMP%]   .area-chart[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n  }\r\n\r\n\r\n\r\n#nav-menu[_ngcontent-%COMP%] {\r\n    float: right;\r\n  }\r\n\r\n#nav-menu.navbar-collapse[_ngcontent-%COMP%] {\r\n    max-height: 39rem;\r\n  }\r\n\r\n#nav-menu[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\r\n    height: 0.1rem;\r\n    margin: 0.9rem 0;\r\n    overflow: hidden;\r\n    background-color: #e5e5e5;\r\n  }\r\n\r\n@media(max-width:48em){\r\n    #nav-menu[_ngcontent-%COMP%] {\r\n      float: none;\r\n    }\r\n  \r\n    form#search[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  \r\n    .round-chart[_ngcontent-%COMP%], .round-chart[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\r\n      display: block;\r\n      margin: auto;\r\n    }\r\n  \r\n    .round-chart[_ngcontent-%COMP%]    + .round-chart[_ngcontent-%COMP%] {\r\n      margin-top: 2rem;\r\n      float: none;\r\n    }\r\n  \r\n    #notification-list[_ngcontent-%COMP%] {\r\n      margin: 1.25rem;\r\n      margin-left: 2rem;\r\n      background-color: #e5e9ec;\r\n    }\r\n  \r\n    #notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n      background-color: #FFF;\r\n      opacity: 1;\r\n    }\r\n  \r\n    #btn-notifications[_ngcontent-%COMP%], #btn-notifications[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      text-align: left;\r\n    }\r\n  \r\n    #nav-menu[_ngcontent-%COMP%]   #btn-notifications[_ngcontent-%COMP%]    > .badge[_ngcontent-%COMP%] {\r\n      right: inherit;\r\n      left: 10rem;\r\n    }\r\n  }\r\n\r\n\r\n\r\n#content[_ngcontent-%COMP%] {\r\n    height: 30em;\r\n    overflow: auto;\r\n  }\r\n\r\n#side-menu[_ngcontent-%COMP%]{\r\n    z-index: 999999999999999999999999;\r\n  }\r\n\r\n.navbar-header[_ngcontent-%COMP%]{\r\n    z-index: 999999;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTs7QUFFVjtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0VBQzNCOztBQUVBLG9CQUFvQjs7QUFDcEI7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztBQUVBO0lBQ0UseUJBQXlCO0lBRXpCLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0UsU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0FBRUEsYUFBYTs7QUFDYjtJQUNFLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekI7RUFDRjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQSxrQkFBa0I7O0FBQ2xCO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUVFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUNiOztBQUVBLFdBQVc7O0FBQ1g7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztBQUVBLDZCQUE2Qjs7QUFDN0I7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsV0FBVztFQUNiOztBQUVBOztJQUVFLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0FBRUE7SUFFRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7QUFFQSxjQUFjOztBQUNkO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7RUFDWDs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFQSxZQUFZOztBQUNaO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtFQUNqQjs7QUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7QUFFQTs7SUFFRSxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7RUFDakI7O0FBRUE7SUFLRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHlCQUF5QjtFQUMzQjs7QUFFQSxlQUFlOztBQUNmO0lBQ0UsbUJBQW1CO0lBRW5CLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwyQ0FBMkM7SUFDM0Msc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0UsU0FBUztJQUNULHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztBQUVBLGNBQWM7O0FBQ2Q7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztBQUVBLGFBQWE7O0FBQ2I7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQ0FBbUM7RUFDckM7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0FBRUEseUJBQXlCOztBQUN6QjtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7O0FBRUE7O0lBRUUsNEJBQTRCO0lBQzVCLFlBQVk7RUFDZDs7QUFFQSxlQUFlOztBQUNmO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUEsWUFBWTs7QUFDWjtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTs7SUFFRSxXQUFXO0VBQ2I7O0FBRUE7O0lBRUUsbUJBQW1CO0VBQ3JCOztBQUVBLGNBQWM7O0FBQ2Q7SUFDRSxhQUFhO0VBQ2Y7O0FBRUEsZ0JBQWdCOztBQUNoQjtJQUNFLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFO01BQ0UsV0FBVztJQUNiOztJQUVBO01BQ0UsYUFBYTtJQUNmOztJQUVBOztNQUVFLGNBQWM7TUFDZCxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsV0FBVztJQUNiOztJQUVBO01BQ0UsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQix5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSxzQkFBc0I7TUFDdEIsVUFBVTtJQUNaOztJQUVBOztNQUVFLFdBQVc7TUFDWCxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxjQUFjO01BQ2QsV0FBVztJQUNiO0VBQ0Y7O0FBRUEsZ0JBQWdCOztBQUNoQjtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztBQUNBO0lBQ0UsaUNBQWlDO0VBQ25DOztBQUNBO0lBQ0UsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypsb2FkaW5nKi9cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTllYztcclxuICB9XHJcbiAgXHJcbiAgLypuYXYgdG9wIGxlZnQgbWVudSovXHJcbiAgbmF2Lm5hdmJhci1maXhlZC10b3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgbmF2IC50b3AtbGVmdC1tZW51IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI4MzA7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5OTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhci1icmFuZCBoMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk5OTk5OTk7XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiAuaGVhZGVyLWJ1dHRvbnMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICB9XHJcbiAgXHJcbiAgLypuYWcgdG9nZ2xlKi9cclxuICAubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyNTI4MzA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlOWVjO1xyXG4gICAgbWFyZ2luLXRvcDogMTNweFxyXG4gIH1cclxuICBcclxuICAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjgzMDtcclxuICB9XHJcbiAgXHJcbiAgLypuYXYgc2VhcmNoIGZvcm0qL1xyXG4gIG5hdiBmb3JtI3NlYXJjaCB7XHJcbiAgICBwYWRkaW5nOiAwLjllbTtcclxuICB9XHJcbiAgXHJcbiAgbmF2IGZvcm0jc2VhcmNoIC5pbnB1dC1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgbmF2IGZvcm0jc2VhcmNoIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuOWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjNGMztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiBmb3JtI3NlYXJjaCAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiBmb3JtI3NlYXJjaCAuZ2x5cGhpY29uLXNlYXJjaCB7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGxlZnQ6IDEuN2VtO1xyXG4gIH1cclxuICBcclxuICAvKm5hdiBtZW51Ki9cclxuICBuYXYgI25hdi1tZW51IHtcclxuICAgIHBhZGRpbmc6IDAuNGVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gIH1cclxuICBcclxuICAvKm5hdiBtZW51IGFuZCBub3RpZmljYXRpb25zKi9cclxuICAjbmF2LW1lbnUgI2J0bi1ub3RpZmljYXRpb25zID4gLmJhZGdlIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzNTk1ODtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41NXJlbSAwLjNyZW0gMC41cmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0wLjRyZW07XHJcbiAgICB0b3A6IDFyZW07XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICB9XHJcbiAgXHJcbiAgI2J0bi1ub3RpZmljYXRpb25zIC5idG4tbGluayxcclxuICAjbmF2LW1lbnUgbGkgYSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gICAgY29sb3I6ICMyNTI4MzA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAjYnRuLW5vdGlmaWNhdGlvbnMgLmJ0bi1saW5rOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgI25vdGlmaWNhdGlvbi1saXN0IHtcclxuICAgIG1heC1oZWlnaHQ6IDIwZW07XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgI25vdGlmaWNhdGlvbi1saXN0IGEge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIG1hcmdpbjogMS41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDEuM3JlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gICNub3RpZmljYXRpb24tbGlzdCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMjYyNjI2O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgI25vdGlmaWNhdGlvbi1saXN0IGltZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIH1cclxuICBcclxuICAjbm90aWZpY2F0aW9uLWxpc3QgLm5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICBtaW4td2lkdGg6IDI1cmVtO1xyXG4gIH1cclxuICBcclxuICAjbm90aWZpY2F0aW9uLWxpc3QgLmJhZGdlOmVtcHR5IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwLjVyZW07XHJcbiAgICB0b3A6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzU5NTg7XHJcbiAgICBoZWlnaHQ6IDEuNHJlbTtcclxuICB9XHJcbiAgXHJcbiAgI25vdGlmaWNhdGlvbi1saXN0IGVtLnNpbmNlIHtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICBjb2xvcjogIzY0NkM4MjtcclxuICB9XHJcbiAgXHJcbiAgLypuYXYgb3B0aW9ucyovXHJcbiAgI25hdi1wcm9maWxlIHtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAjbmF2LXByb2ZpbGUgYnV0dG9uLnRodW1ibmFpbCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICBcclxuICAjbmF2LXByb2ZpbGUgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDIuM2VtO1xyXG4gIH1cclxuICBcclxuICAvKnNpZGUgbWVudSovXHJcbiAgI3NpZGUtbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZTI0O1xyXG4gICAgcGFkZGluZy10b3A6IDcuMnJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSAucHJvZmlsZS1ibG9jayA+ICoge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAjc2lkZS1tZW51IC5wcm9maWxlLWJsb2NrIGltZyB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSAucHJvZmlsZS10aXRsZSB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlLW1lbnUgLnByb2ZpbGUtdGl0bGUgc21hbGwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlLW1lbnUgdWwubmF2IHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlLW1lbnUgdWwubmF2IGEge1xyXG4gICAgY29sb3I6ICM4YjkxYTA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlLW1lbnUgdWwubmF2IGE6aG92ZXIsXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlLW1lbnUgdWwubmF2IGEgLmdseXBoaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgYSAuZ2x5cGhpY29uLnB1bGwtcmlnaHQge1xyXG4gICAgbWFyZ2luLXRvcDogMC4ycmVtO1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgYTpmb2N1cyAuZ2x5cGhpY29uLnB1bGwtcmlnaHQge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgYSAuYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjYTA5NTtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgLm5hdi1kaXZpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI4MzA7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlLW1lbnUgdWwubmF2IHVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlLW1lbnUgdWwubmF2IHVsIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzMDNiO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGUtbWVudSB1bC5uYXYgdWwgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0ODU3O1xyXG4gIH1cclxuICBcclxuICAvKm1haW4gY29udGVudCovXHJcbiAgI21haW4ge1xyXG4gICAgcGFkZGluZy10b3A6IDcuMnJlbTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4zNyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgbWFyZ2luOiAxLjI1cmVtO1xyXG4gICAgZmxleC1ncm93OiA1O1xyXG4gIH1cclxuICBcclxuICAuY2FyZCAqIHtcclxuICAgIGNvbG9yOiAjMjUyODMwO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1ibG9jayB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1ibG9jayBoMiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICBjb2xvcjogIzI1MjgzMDtcclxuICB9XHJcbiAgXHJcbiAgLypyb3VuZCBjaGFydCovXHJcbiAgLnJvdW5kLWNoYXJ0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLnJvdW5kLWNoYXJ0ICsgLnJvdW5kLWNoYXJ0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLnJvdW5kLWNoYXJ0IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcclxuICAgIHdpZHRoOiAxMnJlbTtcclxuICAgIGhlaWdodDogNC40cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAucm91bmQtY2hhcnQgc3BhbiA+IHNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qcXVpY2sgaW5mbyovXHJcbiAgI3F1aWNrLWluZm8gLmNhcmQtYmxvY2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gICNxdWljay1pbmZvIC5xdWljay1zdGF0cyB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjZTVlOWVjO1xyXG4gIH1cclxuICBcclxuICAjcXVpY2staW5mbyAucXVpY2stc3RhdHMgc3Ryb25nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIFxyXG4gICNxdWljay1pbmZvIC5xdWljay1zdGF0cyBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzhiOTFhMDtcclxuICB9XHJcbiAgXHJcbiAgLypwZXJmb3JtYW5jZSBldmFsdWF0aW9uKi9cclxuICAjcGVyZm9ybWFuY2UtZXZhbCAuc3BpZGVyLWNoYXJ0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjY0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oaWdoY2hhcnRzLWNvbnRhaW5lcixcclxuICAuaGlnaGNoYXJ0cy1jb250YWluZXIgc3ZnIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC8qcmF0aW9uIHN0b2NrKi9cclxuICAjcmF0aW9uLXN0b2NrIC5zdGFja2VkLWFyZWEge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgI3JhdGlvbi1zdG9jayAuc3dpdGNoIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzhiOTFhMDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gIH1cclxuICBcclxuICAjcmF0aW9uLXN0b2NrIC5zd2l0Y2hlcnkge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAvKnJlYWwgdGltZSovXHJcbiAgI3JlYWwtdGltZSBsaSB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgI2U1ZTllYztcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gIH1cclxuICBcclxuICAjcmVhbC10aW1lIC5iYWRnZS5vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWJjOThlO1xyXG4gIH1cclxuICBcclxuICAjcmVhbC10aW1lIC5iYWRnZSBzcGFuLFxyXG4gICNyZWFsLXRpbWUgLmxhYmVsIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICBcclxuICAjcmVhbC10aW1lIC5iYWRnZSxcclxuICAjcmVhbC10aW1lIC5sYWJlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gIH1cclxuICBcclxuICAvKmRhaWx5IHVzYWdlKi9cclxuICAjZGFpbHktdXNhZ2UgLmFyZWEtY2hhcnQge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLypmaXhpbmcgbW9iaWxlKi9cclxuICAjbmF2LW1lbnUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAjbmF2LW1lbnUubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIG1heC1oZWlnaHQ6IDM5cmVtO1xyXG4gIH1cclxuICBcclxuICAjbmF2LW1lbnUgLmRpdmlkZXIge1xyXG4gICAgaGVpZ2h0OiAwLjFyZW07XHJcbiAgICBtYXJnaW46IDAuOXJlbSAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYShtYXgtd2lkdGg6NDhlbSl7XHJcbiAgICAjbmF2LW1lbnUge1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIGZvcm0jc2VhcmNoIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC5yb3VuZC1jaGFydCxcclxuICAgIC5yb3VuZC1jaGFydCBjYW52YXMge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvdW5kLWNoYXJ0ICsgLnJvdW5kLWNoYXJ0IHtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAjbm90aWZpY2F0aW9uLWxpc3Qge1xyXG4gICAgICBtYXJnaW46IDEuMjVyZW07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlOWVjO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI25vdGlmaWNhdGlvbi1saXN0IGEge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI2J0bi1ub3RpZmljYXRpb25zLFxyXG4gICAgI2J0bi1ub3RpZmljYXRpb25zID4gYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAjbmF2LW1lbnUgI2J0bi1ub3RpZmljYXRpb25zID4gLmJhZGdlIHtcclxuICAgICAgcmlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIGxlZnQ6IDEwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKmF1ZGllbmNlLmh0bWwqL1xyXG4gICNjb250ZW50IHtcclxuICAgIGhlaWdodDogMzBlbTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICAjc2lkZS1tZW51e1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5O1xyXG4gIH1cclxuICAubmF2YmFyLWhlYWRlcntcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rk5b":
/*!*****************************************************************!*\
  !*** ./src/app/components/performance/performance.component.ts ***!
  \*****************************************************************/
/*! exports provided: PerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceComponent", function() { return PerformanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highstock */ "5ZEx");
/* harmony import */ var highcharts_highstock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ "kAVD");




class PerformanceComponent {
    constructor() {
        this.Highcharts = highcharts_highstock__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
            series: [
                {
                    type: 'line',
                    pointInterval: 24 * 3600 * 1000,
                    data: [1, 2, 3, 4, 5, 12, 5, 84, 60, 4, 12],
                },
            ],
        };
    }
}
PerformanceComponent.ɵfac = function PerformanceComponent_Factory(t) { return new (t || PerformanceComponent)(); };
PerformanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PerformanceComponent, selectors: [["app-performance"]], inputs: { unitHeight: "unitHeight", item: "item" }, decls: 2, vars: 3, consts: [[1, "performance"], [3, "Highcharts", "constructorType", "options"]], template: function PerformanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "highcharts-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("constructorType", "stockChart")("options", ctx.chartOptions);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]], styles: [".performance[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.dotted[_ngcontent-%COMP%] {\r\n    stroke-dasharray: 2;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcmZvcm1hbmNle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmRvdHRlZCB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAyO1xyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerformanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-performance',
                templateUrl: './performance.component.html',
                styleUrls: ['./performance.component.css']
            }]
    }], null, { unitHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_over_view_over_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/over-view/over-view.component */ "57pk");
/* harmony import */ var _components_audience_audience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/audience/audience.component */ "//Ya");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/error/error.component */ "7AdY");







const routes = [
    { path: '', redirectTo: 'overView', pathMatch: 'full' },
    { path: 'overView', component: _components_over_view_over_view_component__WEBPACK_IMPORTED_MODULE_2__["OverViewComponent"] },
    { path: 'audience', component: _components_audience_audience_component__WEBPACK_IMPORTED_MODULE_3__["AudienceComponent"] },
    { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map