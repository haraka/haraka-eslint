'use strict';

exports.meta = {
    docs: {
        description: "disallow if() with a single following line and no curlies",
        category: "Possible Errors",
        recommended: true
    },
    fixable: "code",
    schema: [] // no options
};

exports.create = function (context) {
    const sourceCode = context.getSourceCode();
    const sourceText = sourceCode.getText();

    return {
        IfStatement (node) {
            if (node.parent.type !== "IfStatement") {
                if (node.consequent.type != 'BlockStatement') {
                    // console.log(node);
                    if (sourceText.charCodeAt(sourceCode.getTokenBefore(node.consequent).end) == 10) {
                        context.report({
                            node: node,
                            message: "Newline after if with no curly",
                        })
                    }
                }
            }
        },
    };
}
