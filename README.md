# Swap Widget


## Setup
###### 1 - Install package 

`npm install --save https://github.com/savitar-exchange/swap-sdk.git` 

or 

`yarn add https://github.com/savitar-exchange/swap-sdk.git`

###### 2 - Import widget

```javascript
import * as Swap from 'swap-sdk'
```

or
```javascript
const Swap = require('swap-sdk')
```

or 

```html
<script type='text/javascript' src='./node_modules/swap-sdk/dist/bundle.js'>
```

###### 3 - Set configuration and init widget
```javascript
new Swap.Widget({
    type: 'modal'
}).init()
```

## Modal
Add a button or link with id `swap-init` (or edit config `buttonId`) which will open the widget in modal

***Optional:*** *You can add the class `swap-open` to style the button*
##### Example 
###### HTML
```html
<button class="swap-open" id="swap-init">
    Pay with Swap
</button>
```

###### JS
```javascript
new Swap.Widget({
    type: 'modal',
    config: {
        payment_type: 'merchant',
    }
})
.init()
```


## Embed
Add a container with id `swap-embed` (or edit `embedContainerId`)

##### Example 
###### HTML
```html
<div id="swap-embed"></div>
```

###### JS
```javascript
new Swap.Widget({
    type: 'embed',
    config: {
        payment_type: 'merchant',
    }
})
.init()
```
## Buttons

Pay button with simple configuration

####  Attributes
- `svt-email`: User email - `string`
- `svt-email-editable`: Allow user to change predefined email - `bool`
- `svt-amount`: Amount to order - `float`
- `svt-amount-editable`: Allow user to modify amount - `bool`
- `svt-currency`: Select a currency - `string`
- `svt-order-type`: `buy` or `sell` - `bool`
- `svt-delivery-address`: Address to send ordered coins - `string`
- `svt-payment-type`: Payment type of widget (`merchant` / `exchange` / `iov` / `sell` ) - `string`

##### Example 

###### JS
```javascript
const widget = new Swap.Widget({
    payButtons: true,
    payButtonsStyle: true
})

widget.init()
```
###### HTML
```html
<button type='svt-btn' svt-amount='50' svt-currency='usdt' svt-email='user@email.com' svt-order-type='buy'>Pay now !</button>
<button type='svt-btn' svt-payment-type='merchant' svt-amount='150' svt-currency='btc' svt-delivery-address='367pVvSShqKzBZBA4eqHLwHB41g9NAphTd' />
<button type='svt-btn' svt-payment-type='exchange' svt-amount='50' svt-currency='btc' svt-delivery-address='367pVvSShqKzBZBA4eqHLwHB41g9NAphTd' />
<button type='svt-btn' svt-currency='xtz' />
```


## Advanced

##### Options
- `type`: `modal` or `embed` - `string` 
- `payButtons`: `true` or `false` - Enable click events on swap buttons - `bool`
- `payButtonsStyle`:  `true` or `false` - Enable auto styling of buttons - `bool`
- `embedContainerId`: `swap-embed` - Embed container id - `string`
- `iframeContainerClass`: `swap-widget-container` - iFrame container class - `string`
- `buttonId`: `swap-init` - Modal button id - `string`
- `config`: Widget configuration - `object`


##### Config  

- `email`: User email - `string`
- `email_editable`: Allow user to change predefined email - `bool`
- `payment_type` : `merchant` | `exchange` | `sell` | `iov` - Payment type  - `string`
- `amount`: Amount to order  - `float`
- `amount_editable`: Allow user to modify amount - `bool`
- `currency`: Select a currency  - `string`
- `order_type`: `buy` | `sell` - `string`
- `delivery_address`: Address to send ordered coins - `string`

##### Example
```javascript
const opts = {
        type: 'modal',
        buttonId: 'swap-init',
        config: {
            payment_type: 'merchant',
            email: 'user@test.com',
            email_editable: true,
            currency: 'btc',
            amount: 200,
            amount_editable: false,
            delivery_address: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX'
        }
}
```
### Listeners
```javascript

    widget
    .on(EVENT, () => {})
    .on(EVENT, () => {})
    .on(EVENT, () => {})
```

##### Events
- `ready`: Widget is loaded
- `close`: Widget is close / canceled
- `success`: Payment success
- `failure`: Payment failure



## About
Website: https://swap.savitar.io