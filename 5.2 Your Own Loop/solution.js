function loop(start, condition, update, body) {
    for (let value = start; condition(value); value = update(value)) {
        body(value);
    }
}
