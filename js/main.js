try {
    undefinedFunction();
} catch (error) {
    console.error(error);
}

try {
    undefinedFunction();
} finally {
    console.log("この行は実行されます");
}