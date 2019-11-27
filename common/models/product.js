'use strict';

module.exports = function (Product) {
    Product.afterRemote("find", async ctx => {
        const result = ctx.result;
        for (let i =0; i < result.length; i++) {
            const prob = result[i];
            const cate = await prob.category.get();
            result[i].__data.categoryName = cate.__data.name
        }
        ctx.result = result;
    })

    Product.afterRemote("findById",async ctx=>{
        const result = ctx.result;
            const cate = await result.category.get();
            result.__data.categoryName = cate.__data.name
        ctx.result = result;
    })
};
