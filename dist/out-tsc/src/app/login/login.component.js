var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceClient } from '../services/user.service.client';
import { ActivatedRoute } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, activatedRoute, userService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.password = '';
        this.username = '';
        this.login = function (username, password) {
            var user = {
                username: username,
                password: password
            };
            _this.userService.login(user)
                .then(function (status) {
                if (status === 200) {
                    return _this.router.navigate(['profile']);
                }
                else {
                    alert("User does not exist.");
                }
            });
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            UserServiceClient])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map