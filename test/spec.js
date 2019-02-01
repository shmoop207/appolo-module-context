"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appolo_1 = require("appolo");
const request = require("supertest");
const __1 = require("../");
let should = require('chai').should();
describe("socket module Spec", function () {
    let app;
    beforeEach(async () => {
        app = appolo_1.createApp({ root: __dirname, environment: "production", port: 8182 });
        await app.module(new __1.ContextModule());
        await app.launch();
    });
    afterEach(async () => {
        await app.reset();
    });
    it('should get context from manager', async () => {
        let res = await request(app.handle)
            .get('/test/context?userName=bla');
        res.body.userName.should.be.eq("bla");
    });
    it('should get context from manager parallel', async () => {
        let [res, res2] = await Promise.all([request(app.handle).get('/test/context?userName=bla'), request(app.handle).get('/test/context?userName=foo')]);
        res.body.userName.should.be.eq("bla");
        res2.body.userName.should.be.eq("foo");
    });
});
//# sourceMappingURL=spec.js.map