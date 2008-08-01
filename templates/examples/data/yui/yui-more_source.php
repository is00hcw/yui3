<!-- include all requirements for node -->
<script type="text/javascript" src="<?php echo $buildpath ?>oop/oop.js"></script>
<script type="text/javascript" src="<?php echo $buildpath ?>event/event.js"></script>
<script type="text/javascript" src="<?php echo $buildpath ?>dom/dom.js"></script>
<script type="text/javascript" src="<?php echo $buildpath ?>node/node.js"></script>

<style>
    #demo {
        border: 1px solid black;
        background-color: #8DD5E7;
    }
    #demo strong {
        font-weight: bold;
    }
</style>
</head>
<body>

<div id="demo"></div>

<script>

YUI().use('*', 
function(Y) {
    var node = Y.get('#demo');
    var used = [];
    Y.each(Y.Env._attached, function(v, k) {
        used[used.length] = k;
    });
    used.sort();
    node.set('innerHTML', '<strong>Modules Loaded:</strong> ' + used.join(', '));
});
</script>

