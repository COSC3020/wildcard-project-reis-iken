function quicksort6Pivot(list) {
    let n = list.length;
    if (n <= 1) {
        return list;
    } else if (n >= 2 && n <= 5) {
        return list.sort((a, b) => a - b);
    } else {
        let [pivot1, pivot2, pivot3, pivot4, pivot5, pivot6] = list.splice(0, 6).sort((a, b) => a - b);
        let a = [];
        let b = [];
        let c = [];
        let d = [];
        let e = [];
        let f = [];
        let g = [];
        list.forEach(element => {
            if (element < pivot1) {
                a.push(element);
            } else if (element < pivot2) {
                b.push(element);
            } else if (element < pivot3) {
                c.push(element);
            } else if (element < pivot4) {
                d.push(element);
            } else if (element < pivot5) {
                e.push(element);
            } else if (element < pivot6) {
                f.push(element);
            } else {
                g.push(element);
            }
        });
        return quicksort6Pivot(a).concat([pivot1], quicksort6Pivot(b), [pivot2], quicksort6Pivot(c), [pivot3], quicksort6Pivot(d), [pivot4], quicksort6Pivot(e), [pivot5], quicksort6Pivot(f), [pivot6], quicksort6Pivot(g));
    }
}
