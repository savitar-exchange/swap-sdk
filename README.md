# Savitar Widget

1 - Install package 

`npm i @savitar/card-widget` 

or 

`yarn add @savitar/card-widget`

2 - Import widget

`import SavitarWidget from '@savitar/card-widget' `

or

`const SavitarWidget = require('@savitar/card-widget')`

3 - Set configuration

    const Savitar = new SavitarWidget(YOUR_CLIENT_ID, {
        mode: 'production', 
        type: 'modal'
    })

4 - Init widget

    Savitar
    .init({
        email: 'user@test.com'
    })

# Modal
Add a button or link with id `savitar-init` (or edit `buttonId`)

    <button class="savitar-open" id="savitar-init">
        Pay with Savitar
    </button>

# Embed
Add a container with id `savitar-embed` (or edit `embedContainerId`)

    <div id="savitar-embed"></div>


# Advanced

### Options
- `mode`: `production` or `sandbox`    
- `type`: `modal` or `embed`    
- `embedContainerId`: Embed container id
- `iframeContainerClass`: iFrame container class
- `buttonId`: Modal button id

### Listeners

    Savitar
    .on(EVENT, () => {})

#### Events
- `ready`: Widget is loaded
- `close`: Widget is close / canceled
- `success`: Payment success
- `failure`: Payment failure

#### Chaining
    Savitar
    .init()
    .on(EVENT, () => {})
    .on(EVENT, () => {})
    .on(EVENT, () => {})

## About
Website: https://savitar.io