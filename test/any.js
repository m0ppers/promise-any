'use strict';
var promiseAny = require('../index');
var assert = require('assert');

describe('Any test', function () {

    it('should handle []', function (done) {
        let promises = [];
        promiseAny(promises).then(function (value) {
            done(value);
        }, function (reasons) {
            assert.deepEqual([], reasons);
            done();
        });
    });

    it('should handle [success, failure]', function (done) {
        let promises = [Promise.resolve('p1'), Promise.reject('p2')];
        promiseAny(promises).then(function(value) {
            assert.equal(value, 'p1');
            done();
        }, function (reasons) {
            done(reasons);
        });
    });

    it('should handle [failure, success]', function (done) {
        let promises = [Promise.reject('p1'), Promise.resolve('p2')];
        promiseAny(promises).then(function (value) {
            assert.equal(value, 'p2');
            done();
        }, function (reasons) {
            done(reasons);
        });
    });

    it('should handle [failure, failure]', function (done) {
        let promises = [Promise.reject('p1'), Promise.reject('p2')];
        promiseAny(promises).then(function (value) {
            done('Got value ' + value);
        }, function (reasons) {
            assert.deepEqual(reasons, ['p1', 'p2']);
            done();
        });
    });

    it('should handle any iterables', function (done) {
        let promises = (function *() {
            yield Promise.reject('p1');
            yield Promise.resolve('p2');
        })();
        promiseAny(promises).then(function(value) {
            assert.equal(value, 'p2');
            done();
        }, function (reasons) {
            done(reasons);
        });
    });

    it('should handle value that is not a promise', function (done) {
        let promises = ['p1']
        promiseAny(promises).then(function (value) {
            assert.equal(value, 'p1');
            done();
        }, function (reasons) {
            done(reasons);
        })
    });

});
