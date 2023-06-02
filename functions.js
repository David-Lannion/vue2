function tableContain(c, b) {
    var a = false;
    for (var d = 0; d < c.length; d++) {
        if (c[d] == b) {
            a = true
        }
    }
    return a
}
function armeGetName(a) {
    return armeTable[a][0]
}
function sortGetName(a) {
    return sortTable[a][1]
}
function sortGetEcole(a) {
    return sortTable[a][2]
}
function sortGetBranches(a) {
    return sortTable[a][3].sort()
}
function sortGetClass(a) {
    var b = [];
    for (var c = 0; c < sortTable[a][4].length; c++) {
        b.push(sortTable[a][4][c][0])
    }
    return b.sort()
}
function sortGetLvl(a) {
    var b = [];
    for (var c = 0; c < sortTable[a][4].length; c++) {
        b.push(sortTable[a][4][c][1])
    }
    return b.sort()
}
function sortGetClassLvl(a, d) {
    var b = [];
    for (var c = 0; c < sortTable[a][4].length; c++) {
        if (sortTable[a][4][c][0] == d) {}
        b.push(sortTable[a][4][c][1])
    }
    return b[0]
}
function getDiffElem(b) {
    var c = [];
    var a = false;
    for (var e = 0; e < b.length; e++) {
        a = false;
        for (var d = 0; d < c.length; d++) {
            if (c[d] != b[e]) {
                a = (false | a)
            } else {
                a = true
            }
        }
        if (a == false) {
            c.push(b[e])
        }
    }
    return c.sort()
}
function getDiffTabElem(b, f) {
    var c = [];
    var a = false;
    for (var e = 0; e < b.length; e++) {
        a = false;
        for (var d = 0; d < c.length; d++) {
            if (c[d] != b[e][f]) {
                a = (false | a)
            } else {
                a = true
            }
        }
        if (a == false) {
            c.push(b[e][f])
        }
    }
    return c.sort()
}
function getDiff2Elem(a, b) {
    return getDiffElem(a.concat(b))
}
function getDiffClass() {
    var a = [];
    for (var b = 0; b < sortTable.length; b++) {
        a = getDiff2Elem(sortGetClass(b), a)
    }
    return a.sort()
}
function search() {
    var e = false;
    var b = false;
    var a = "";
    var c = [];
    var f = 0;
    for (var d = 0; d < sortTable.length; d++) {
        e = true;
        e = tableContain(bookUsed, sortTable[d][0]);
        if (e && document.getElementById("spell_Type_box").checked) {
            e = e && tableContain(sortGetBranches(d), getValue("spell_Type"))
        }
        if (e && document.getElementById("spell_Ecole_box").checked) {
            e = e && (sortGetEcole(d) == getValue("spell_Ecole"))
        }
        if (e && document.getElementById("spell_Classe_box").checked) {
            e = e && tableContain(sortGetClass(d), getValue("spell_Class"))
        }
        if (e && document.getElementById("spell_name_box").checked) {
            e = e && (sortTable[d][1].match(getValue("spell_name_val")) != null)
        }
        if (e && document.getElementById("spell_lvl_box").checked) {
            e = e && tableContain(sortGetLvl(d), parseInt(getValue("spell_lvl")))
        }
        if (e) {
            f++;
            if (document.getElementById("spell_Ecole_box").checked) {
                c.push(new Array(sortGetClassLvl(d, getValue("spell_Class")),d))
            } else {
                c.push(new Array(sortGetLvl(d)[0],d))
            }
        }
    }
    if (document.getElementById("spell_cc_box").checked) {
        c.sort()
    }
    for (var d = 0; d < c.length; d++) {
        a += "<div class='panel panel-default'><div class='panel-heading'><h3 class='panel-title' onclick='toggleSort(" + c[d][1] + ");'>" + sortTable[c[d][1]][1] + "</h3></div><div class='panel-body' id='res" + c[d][1] + "'></div></div>"
    }
    document.getElementById("SPELLS").innerHTML = a;
    document.getElementById("count").innerHTML = f
}
function getDiffEcole() {
    return getDiffTabElem(sortTable, 2)
}
function getDiffBranches() {
    var b = [];
    var a = false;
    for (var e = 0; e < sortTable.length; e++) {
        a = false;
        for (var c = 0; c < sortTable[e][3].length; c++) {
            for (var d = 0; d < b.length; d++) {
                if (b[d] != sortTable[e][3][c]) {
                    a = (false | a)
                } else {
                    a = true
                }
            }
            if (a == false) {
                b.push(sortTable[e][3][c])
            }
        }
    }
    return b.sort()
}
function affTmp(c) {
    var b = "";
    var a = " selected";
    for (var d = 0; d < c.length; d++) {
        b += "<option value='" + c[d] + "'" + a + ">" + c[d] + "</option>\n";
        a = ""
    }
    return b
}
function sortAff(c) {
    var g = "<tr><td width='5%' class='spellStat' background='./images/gold/gold_tile_light.png'><div align='left'>";
    var f = "<tr><td width='5%' class='spellStat' ><div align='left'>";
    var h = "</div></td></tr>";
    var b = false;
    var e = "";
    var a = "";
    for (var d = 0; d < c.length; d++) {
        a = sortShow(d);
        if (b) {
            e += f
        } else {
            e += g
        }
        b = !b;
        e += a + "" + h
    }
    document.getElementById("SPELLS").innerHTML = e
}
function toggleSort(a) {
    console.log("res" + a);
    if (getField("res" + a) == "") {
        document.getElementById("res" + a).innerHTML = sortShow(a)
    } else {
        document.getElementById("res" + a).innerHTML = ""
    }
}
function sortShow(a) {
    txt = "<b>Livre :</b> " + sortTable[a][0] + "<br><b>Ecole :</b> " + sortTable[a][2] + "<br><b>Branches :</b> " + sortTable[a][3].toString() + "<br><b>Classes :</b> " + sortTable[a][4].toString() + "<br><b>Composantes :</b> " + sortTable[a][5].toString() + "<br><b>Temps d'incantation :</b> " + sortTable[a][6] + "<br><b>Portée :</b> " + sortTable[a][7] + "<br><b>Cible :</b> " + sortTable[a][8] + "<br><b>Durée :</b> " + sortTable[a][9] + "<br><b>Jet de sauvegarde :</b> " + sortTable[a][10] + "<br><b>Résistance à la magie :</b> " + sortTable[a][11] + "<br><b>Description : </b>" + sortTable[a][12] + "<br><b>Nécessaire :</b> " + sortTable[a][13];
    return txt
}
function addBook() {
    var a = [];
    var c = document.getElementById("book_toAdd").value;
    if (c != "") {
        bookUsed.push(c);
        bookUsed = bookUsed.sort();
        for (var b = 0; b < bookTable.length; b++) {
            if (bookTable[b] != c) {
                a.push(bookTable[b])
            }
        }
        bookTable = a.sort()
    }
    document.getElementById("book_toAdd").innerHTML = affTmp(bookTable);
    document.getElementById("book_Added").innerHTML = affTmp(bookUsed)
}
function delBook() {
    var a = [];
    var c = document.getElementById("book_Added").value;
    if (c != "") {
        bookTable.push(c);
        bookTable = bookTable.sort();
        for (var b = 0; b < bookUsed.length; b++) {
            if (bookUsed[b] != c) {
                a.push(bookUsed[b])
            }
        }
        bookUsed = a.sort()
    }
    document.getElementById("book_toAdd").innerHTML = affTmp(bookTable);
    document.getElementById("book_Added").innerHTML = affTmp(bookUsed)
}
function tableGetNum(e, c, d) {
    var a = -1;
    for (var b = 0; b < e.length; b++) {
        if (e[b][c] == d) {
            a = b
        }
    }
    return a
}
function min(b, a) {
    if (b > a) {
        return a
    }
    return b
}
function getField(a) {
    return document.getElementById(a).innerHTML
}
function getValue(a) {
    return document.getElementById(a).value
}
function getNumber(a) {
    return parseInt(getField(a))
}
function refreshFP() {
    document.getElementById("spell_Ecole").innerHTML = affTmp(getDiffEcole());
    document.getElementById("spell_Class").innerHTML = affTmp(getDiffClass());
    document.getElementById("book_toAdd").innerHTML = affTmp(bookTable);
    document.getElementById("book_Added").innerHTML = affTmp(bookUsed);
    document.getElementById("spell_Type").innerHTML = affTmp(getDiffBranches())
}
bookTable = getDiffTabElem(sortTable, 0);
refreshFP();
