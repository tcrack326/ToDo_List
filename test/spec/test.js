/* global describe, it */

(function () {
  'use strict';

  describe('An Item', function () {
    describe('Creating an item', function () {
      it('should be an instance of Item', function () {
        var item = new Item();
        expect(item).to.be.an.instanceOf(Item);
      });
      it('should be incomplete by default', function() {
        var item = new Item();
        expect(item.status).to.equal('incomplete');
      });
      it('should populate with a default message', function() {
        var item = new Item();
        expect(item.message).to.equal('Type something here');
      });
    });


  });
})();
