const express = require('express')
const app = express()
const port = 3000
 let photoArray = [
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v24/Corsair_WP1_400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v1/Wallpaper-v1-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v4/Wallpaper-v4-400.jpg",
    "https://i.pinimg.com/474x/48/20/b1/4820b1b0cb074261f04538be6eafd0de--wallpaper-for-iphone-iphone-backgrounds.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v6/Wallpaper-v6-400.jpg",
    "https://cdn.pixabay.com/photo/2014/04/14/20/11/japanese-cherry-trees-324175__340.jpg",
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v8/Wallpaper-v8-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v9/Wallpaper-v9-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v10/Wallpaper-v10-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v11/Wallpaper-v11-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v12/Wallpaper-v12-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v13/Wallpaper-v13-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v14/Wallpaper-v14-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v15/Wallpaper-v15-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v21/Wallpaper-v21-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v18/Wallpaper-v18-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v19/Wallpaper-v19-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v23/Wallpaper-v23-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v20/Wallpaper-v20-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v24/Corsair_WP1_400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v1/Wallpaper-v1-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v4/Wallpaper-v4-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v5/Wallpaper-v5-400.jpg",
    "https://cdn.pixabay.com/photo/2014/04/14/20/11/japanese-cherry-trees-324175__340.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v6/Wallpaper-v6-400.jpg",
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v13/Wallpaper-v13-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v14/Wallpaper-v14-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v15/Wallpaper-v15-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v16/Wallpaper-v16-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v21/Wallpaper-v21-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v18/Wallpaper-v18-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v19/Wallpaper-v19-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v23/Wallpaper-v23-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v20/Wallpaper-v20-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v8/Wallpaper-v8-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v9/Wallpaper-v9-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v10/Wallpaper-v10-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v11/Wallpaper-v11-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v12/Wallpaper-v12-400.jpg",

    ];
    let pagesize=20;
    app.get("/photos/:page/", (req, res) =>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
    const page=req.url.split("/")[2];
    start=(page-1)*pagesize;
    end=start+ pagesize;
    res.send(photoArray.slice(start,end));
    });
   app.listen(port, () => console.log(`Example app listening on port ${port}!`));