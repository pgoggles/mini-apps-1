"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      currentPage: 0,
      name: '',
      email: '',
      password: '',
      requiredShow: '',
      ID: null
    };
    return _this;
  }

  _createClass(App, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.id, event.target.value));
    }
  }, {
    key: "checkoutZero",
    value: function checkoutZero() {
      this.setState({
        currentPage: 1
      });
    }
  }, {
    key: "SubmitF1",
    value: function SubmitF1() {
      var _this2 = this;

      if (this.state.name === '' || this.state.email === '' || this.state.password === '') {
        this.setState({
          requiredShow: 'Please Fill in All Required Fields.'
        });
      } else {
        $.ajax({
          type: 'POST',
          url: '/form1',
          data: {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          },
          success: function success(data) {
            _this2.setState({
              ID: data,
              currentPage: 2,
              requiredShow: ''
            });
          }
        });
      }
    }
  }, {
    key: "SubmitF2",
    value: function SubmitF2() {
      var _this3 = this;

      console.log(this.state);

      if (this.state.address1 === '' || this.state.city === '' || this.state.zipcode === '' || this.state.state === '' || this.state.phone === '') {
        this.setState({
          requiredShow: 'Please Fill in All Required Fields.'
        });
      } else {
        $.ajax({
          type: 'POST',
          url: '/form2',
          data: {
            id: this.state.ID,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode,
            phone: this.state.phone
          },
          success: function success(data) {
            _this3.setState({
              currentPage: 3,
              requiredShow: ''
            });
          }
        });
      }
    }
  }, {
    key: "SubmitF3",
    value: function SubmitF3() {
      var _this4 = this;

      console.log(this.state);

      if (this.state.creditcard === '' || this.state.expirydate === '' || this.state.cvv === '' || this.state.billingzip === '') {
        this.setState({
          requiredShow: 'Please Fill in All Required Fields.'
        });
      } else {
        $.ajax({
          type: 'POST',
          url: '/form3',
          data: {
            id: this.state.ID,
            ccnumber: this.state.creditcard,
            expiry: this.state.expirydate,
            cvv: this.state.cvv,
            billingzip: this.state.billingzip
          },
          success: function success(data) {
            var parsedData = JSON.parse(data);

            _this4.setState({
              currentPage: 4,
              requiredShow: '',
              postedData: parsedData
            });
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.currentPage === 0) {
        return /*#__PURE__*/React.createElement("button", {
          id: "Checkout",
          type: "button",
          onClick: this.checkoutZero.bind(this)
        }, "Checkout");
      } else if (this.state.currentPage === 1) {
        return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
          "for": "name"
        }, "Name: (Required)  "), /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "name",
          id: "name",
          required: true,
          onChange: this.handleChange.bind(this)
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
          "for": "email"
        }, "Email: (Required)  "), /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "email",
          id: "email",
          required: true,
          onChange: this.handleChange.bind(this)
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
          "for": "password"
        }, "Password: (Required)  "), /*#__PURE__*/React.createElement("input", {
          type: "password",
          name: "password",
          id: "password",
          required: true,
          onChange: this.handleChange.bind(this)
        })), /*#__PURE__*/React.createElement("button", {
          id: "SubmitF1",
          type: "button",
          onClick: this.SubmitF1.bind(this)
        }, "Next"), /*#__PURE__*/React.createElement("div", {
          "class": "required"
        }, this.state.requiredShow));
      } else if (this.state.currentPage === 2) {
        return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
          "for": "address1"
        }, "Address Line 1: (Required)  "), /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "address1",
          id: "address1",
          required: true,
          onChange: this.handleChange.bind(this)
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
          "for": "address2"
        }, "Address Line 2:  "), /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "address2",
          id: "address2",
          required: true,
          onChange: this.handleChange.bind(this)
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
          "for": "city"
        }, "City: (Required)  "), /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "city",
          id: "city",
          required: true,
          onChange: this.handleChange.bind(this)
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
          "for": "state"
        }, "State: (Required)  "), /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "state",
          id: "state",
          required: true,
          onChange: this.handleChange.bind(this)
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
          "for": "zipcode"
        }, "Zip Code: (Required)  "), /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "zipcode",
          id: "zipcode",
          required: true,
          onChange: this.handleChange.bind(this)
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
          "for": "phone"
        }, "Phone Number: (Required, Numbers Only)  "), /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "phone",
          id: "phone",
          required: true,
          onChange: this.handleChange.bind(this)
        })), /*#__PURE__*/React.createElement("button", {
          id: "SubmitF2",
          type: "button",
          onClick: this.SubmitF2.bind(this)
        }, "Next"), /*#__PURE__*/React.createElement("div", {
          "class": "required"
        }, this.state.requiredShow));
      } else if (this.state.currentPage === 3) {
        return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
          "for": "creditcard"
        }, "Credit Card Number: (Required)  "), /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "creditcard",
          id: "creditcard",
          required: true,
          onChange: this.handleChange.bind(this)
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
          "for": "expirydate"
        }, "Expiry Date (Required):  "), /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "expirydate",
          id: "expirydate",
          required: true,
          onChange: this.handleChange.bind(this)
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
          "for": "cvv"
        }, "CVV: (Required)  "), /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "cvv",
          id: "cvv",
          required: true,
          onChange: this.handleChange.bind(this)
        })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
          "for": "billingzip"
        }, "Billing Zip Code: (Required)  "), /*#__PURE__*/React.createElement("input", {
          type: "text",
          name: "billingzip",
          id: "billingzip",
          required: true,
          onChange: this.handleChange.bind(this)
        })), /*#__PURE__*/React.createElement("button", {
          id: "SubmitF3",
          type: "button",
          onClick: this.SubmitF3.bind(this)
        }, "Submit"), /*#__PURE__*/React.createElement("div", {
          "class": "required"
        }, this.state.requiredShow));
      } else if (this.state.currentPage === 4) {
        console.log(this.state);
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Name: ", this.state.postedData[0].name), /*#__PURE__*/React.createElement("p", null, "E-Mail Address: ", this.state.postedData[0].email), /*#__PURE__*/React.createElement("p", null, "Address 1: ", this.state.postedData[0].address1), /*#__PURE__*/React.createElement("p", null, "Address 2: ", this.state.postedData[0].address2), /*#__PURE__*/React.createElement("p", null, "City: ", this.state.postedData[0].city), /*#__PURE__*/React.createElement("p", null, "State: ", this.state.postedData[0].state), /*#__PURE__*/React.createElement("p", null, "Zip Code: ", this.state.postedData[0].zip), /*#__PURE__*/React.createElement("p", null, "Phone Number: ", this.state.postedData[0].phone));
      }
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('App'));