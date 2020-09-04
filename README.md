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


# Advanced

### Options
- `mode`: `production` or `sandbox`    
- `type`: `modal` or `embed`    
- `embedContainerId`: Embed container id
- `iframeContainerClass`: iFrame container class
- `buttonId`: Modal button id

### Listeners

    Swap
    .on(EVENT, () => {})

#### Events
- `ready`: Widget is loaded
- `close`: Widget is close / canceled
- `success`: Payment success
- `failure`: Payment failure

#### Chaining
    Swap
    .init()
    .on(EVENT, () => {})
    .on(EVENT, () => {})
    .on(EVENT, () => {})

## About
Website: https://swap.savitar.io