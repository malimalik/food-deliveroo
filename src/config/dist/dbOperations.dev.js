"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pushMealsToDB = void 0;

var _database = require("firebase/database");

var _firebaseConfig = require("./firebaseConfig.js");

var _MealsData = require("../data/MealsData.js");

console.log(_MealsData.MEALS);

var pushMealsToDB = function pushMealsToDB() {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, meal, mealsRef;

  return regeneratorRuntime.async(function pushMealsToDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 4;
          _iterator = _MealsData.MEALS[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 14;
            break;
          }

          meal = _step.value;
          mealsRef = (0, _database.ref)(_firebaseConfig.db, "meals/".concat(meal.id));
          _context.next = 11;
          return regeneratorRuntime.awrap((0, _database.set)(mealsRef, meal));

        case 11:
          _iteratorNormalCompletion = true;
          _context.next = 6;
          break;

        case 14:
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](4);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 20:
          _context.prev = 20;
          _context.prev = 21;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 23:
          _context.prev = 23;

          if (!_didIteratorError) {
            _context.next = 26;
            break;
          }

          throw _iteratorError;

        case 26:
          return _context.finish(23);

        case 27:
          return _context.finish(20);

        case 28:
          console.log('All meals have been pushed to the database.');
          _context.next = 34;
          break;

        case 31:
          _context.prev = 31;
          _context.t1 = _context["catch"](0);
          console.error("There was an error:", _context.t1);

        case 34:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 31], [4, 16, 20, 28], [21,, 23, 27]]);
};

exports.pushMealsToDB = pushMealsToDB;

if (require.main === module) {
  pushMealsToDB()["catch"](function (err) {
    return console.log(err);
  });
}