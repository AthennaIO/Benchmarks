export { Stack } from './src/stack/index.js';
export { Parser } from './src/parser/main.js';
export { EdgeBuffer } from './src/edge_buffer/index.js';
/**
 * Names of supported expressions
 */
export declare const expressions: {
    Identifier: "Identifier";
    MemberExpression: "MemberExpression";
    ExpressionStatement: "ExpressionStatement";
    CallExpression: "CallExpression";
    ArrowFunctionExpression: "ArrowFunctionExpression";
    Literal: "Literal";
    TemplateLiteral: "TemplateLiteral";
    BinaryExpression: "BinaryExpression";
    ArrayExpression: "ArrayExpression";
    ObjectExpression: "ObjectExpression";
    UnaryExpression: "UnaryExpression";
    FunctionDeclaration: "FunctionDeclaration";
    ConditionalExpression: "ConditionalExpression";
    LogicalExpression: "LogicalExpression";
    SequenceExpression: "SequenceExpression";
    AssignmentExpression: "AssignmentExpression";
    AwaitExpression: "AwaitExpression";
    NewExpression: "NewExpression";
    BlockStatement: "BlockStatement";
    ReturnStatement: "ReturnStatement";
    ThisExpression: "ThisExpression";
    ChainExpression: "ChainExpression";
    SpreadElement: "SpreadElement";
};
