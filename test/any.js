'use strict';
var anyPromise = require('../index');
var assert = require('assert');

describe('Any test', function() {
    it('should report failure for empty arrays', function(done) {
        let promises = [];
        anyPromise(promises).then(function() {
            done('Empty array should report failure');
        }, function() {
            done();
        });
    });
    it('should handle success and then failure', function(done) {
        let promises = [Promise.resolve('p1'), Promise.reject('p2')];
        anyPromise(promises).then(function(value) {
            assert.equal(value, 'p1');
            done();
        }, function(error) {
            done(error);
        });
    });
    it('should handle failure and then success', function(done) {
        let promises = [Promise.reject('p1'), Promise.resolve('p2')];
        anyPromise(promises).then(function(value) {
            assert.equal(value, 'p2');
            done();
        }, function(error) {
            done(error);
        });
    });
    it('should handle failure', function(done) {
        let promises = [Promise.reject('p1'), Promise.reject('p2')];
        anyPromise(promises).then(function(value) {
            done('Got value ' + value);
        }, function(error) {
            assert.equal(error, 'p2');
            done();
        });
    });
});
