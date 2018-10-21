#!/usr/bin/env python3

# write code for each type of user's page

import pandas as pd
url_file = 'resources_for_user.csv'
page_start = """<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="./favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="./manifest.json">
    <link rel="stylesheet" type="text/css" href="./css/beepo/stylesheet.css">
    <link rel="stylesheet" type="text/css" href="./css/bundy/stylesheet.css">
    <link rel="stylesheet" type="text/css" href="./css/main.css">

    <title>EnviroMAP - Take Action - Citizen Scientist</title>
</head>
<body>
<noscript>
    You need to enable JavaScript to run this app.
</noscript>
<!--<div id="root">-->
<header class="left-indent">
    <div id="logo">
        <img src="./images/enviroculture_logo.png" alt="Header logo" height="50px"/>
    </div>
    <!--Icons from flaticon.com-->
    <!--Author: Icons8-->
    <div id="about-icon" class="header-icon">
        <a href="about.html">
            <img src="./images/about.png" alt="Map icon" height="45px"/>
        </a>
    </div>
    <!--Author: Freepik-->
    <div id="news-icon" class="header-icon">
        <a href="news.html">
            <img src="./images/newspaper-folded.png" alt="News icon" height="45px"/>
        </a>
    </div>
    <!--Author: Tomas Knop-->
    <div id="action-icon" class="header-icon">
        <a href="action.html">
            <img src="./images/handshake.png" alt="Action icon" height="45px"/>
        </a>
    </div>
    <!--Author: Smashicons-->
    <div id="map-icon" class="header-icon">
        <a href="index.html">
            <img src="./images/map-location.png" alt="Map icon" height="45px"/>
        </a>
    </div>
</header>
"""
heading_s = '<h1 id="map-title" class="left-indent">'
heading_e = '</h1>\n<table id="news-table">'
list_item_s = """<tr class="news-row">
        <td class="news-data">
            """
list_item_e = """
        </td>
    </tr>"""
page_end = """</table>
<script>
    document.getElementById("action-icon").style.backgroundColor = "#d8ffcc";
    document.getElementById("map-icon").style.backgroundColor = "#FFE571";
    document.getElementById("news-icon").style.backgroundColor = "#FFE571";
    document.getElementById("about-icon").style.backgroundColor = "#FFE571";
</script>
</body>
</html>"""

page = '{}'.format(page_start)
df = df_ndata = pd.read_csv(globe_file, sep=',')
for user in df['User'].values:
    page[user]='page'

