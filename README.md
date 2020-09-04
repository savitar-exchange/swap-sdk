# Swap Widget

1 - Install package 

`npm install --save https://github.com/savitar-exchange/swap-sdk.git` 

or 

`yarn add https://github.com/savitar-exchange/swap-sdk.git`

2 - Import widget

`import SwapWidget from 'swap-sdk' `

or

`const SwapWidget = require('swap-sdk')`

or 

`<script type='text/javascript' src='./node_modules/swap-sdk/index.js'>`

3 - Set configuration

    const Swap = new SwapWidget({
        type: 'modal'
    })

4 - Init widget

    Swap
    .init({
        email: 'user@test.com'
    })

# Modal
Add a button or link with id `swap-init` (or edit `buttonId`)

    <button class="swap-open" id="swap-init">
        Pay with Swap
    </button>

# Embed
Add a container with id `swap-embed` (or edit `embedContainerId`)

    <div id="swap-embed"></div>

# Buttons

Pay button with simple configuration

####  Attributes
- `svt-email`: User email 
- `svt-email-editable`: Allow user to change predefined email
- `svt-amount`: Amount to order
- `svt-amount-editable`: Allow user to modify amount
- `svt-currency`: Select a currency 
- `svt-order-type`: `buy` or `sell` 
- `svt-delivery-address`: Address to send ordered coins

#### Example 
`<button
    svt-email="user@email.com"> 
    svt-email-editable="true"> 
    svt-amount="50"> 
    svt-amount-editable="true"
    svt-currency="btc"
    svt-order-type="buy"
    svt-delivery-address="1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
    > 
Pay now !    
</button>`

# Advanced

### Options
- `mode`: `production` or `sandbox`    
- `type`: `modal` or `embed`  
- `payButtons`: `true` or `false` - Enable click events on swap buttons
- `payButtonsStyle`:  `true` or `false` - Enable auto styling of buttons
- `embedContainerId`: `swap-embed` - Embed container id
- `iframeContainerClass`: `swap-widget-container` - iFrame container class
- `buttonId`: `swap-init` - Modal button id
- `config`: Widget configuration

#### config  

- `email`: User email
- `email_-_editable`: Allow user to change predefined email
- `payment_type` : `merchant` or `exchange` or `sell` or `iov` - Payment type
- `amount`: Amount to order
- `amount_editable`: Allow user to modify amount
- `currency`: Select a currency 
- `order_type`: `buy` or `sell` 
- `delivery_address`: Address to send ordered coins

Example: 

        type: 'modal' or 'embed',
        buttonId: 'swap-init',
        config: {
            type: 'merchant',
            email: 'user@test.com',
            email_editable: true,
            currency: 'btc',
            amount: 200,
            amount_editable: false,
            delivery_address: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX'
        }

### Listeners

    Swap
    .on(EVENT, () => {})

#### Chaining
    Swap
    .init()
    .on(EVENT, () => {})
    .on(EVENT, () => {})
    .on(EVENT, () => {})
    
#### Events
- `ready`: Widget is loaded
- `close`: Widget is close / canceled
- `success`: Payment success
- `failure`: Payment failure



## About
Website: https://swap.savitar.io