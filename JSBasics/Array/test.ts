const array = [1, 2, 3, 4].reduce<string[]>((acc, n) => {
    acc.push(`${n}`);
    return acc;
}, [])