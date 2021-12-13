const INPUT = [[["ecgabfd","gfbe","dgbeaf","aeg","gfbda","eg","bgdcaf","efgdca","abced","eadgb"],["begf","decgfa","aeg","eg"]],[["ebfg","bfgdea","gaf","gf","baedgc","dafec","cfdabg","ecfabgd","fdgea","dbaeg"],["gaedbc","egbf","dbgcea","dagfebc"]],[["cfadeg","ca","bacg","dfabe","dgcbf","dbegafc","dac","afbdgc","gcbedf","bfcda"],["fbdac","adbef","bgcdfae","dcagfe"]],[["eag","cdgfae","cbdge","ae","fcgad","eabdfg","ecaf","gefbadc","dgafcb","degca"],["dacbefg","fcdage","agdcf","fedagb"]],[["dga","edac","gdfbea","bgdfec","da","cfbga","dbgec","cadgb","bdgace","dcbfage"],["acgfb","gaecbfd","dag","gedfab"]],[["cefb","fb","abcgefd","fagbde","fcbgae","faecg","cbadg","cbfga","bfa","agcdef"],["gbacf","agbfc","bgcaef","baf"]],[["ebdacf","cbgfae","cgdebaf","afdcb","gabdc","df","cdf","eafd","ecabf","begdfc"],["cbdaf","gdabc","fd","cbefda"]],[["ge","daebc","fcagb","fdebac","gaed","ecabg","egc","gacedb","cbdfeg","adcfbeg"],["gec","gebdca","ebagc","adbgcfe"]],[["bgfade","gcefbd","eafgd","fcae","cadgf","gcf","dgcba","cfdega","cagbdfe","cf"],["cdgeaf","agfed","cf","cf"]],[["abfge","ebac","acfegbd","bc","fcged","gbfec","cfgbad","fecabg","agbfde","fcb"],["aefgdb","cfb","egbfca","cbfaedg"]],[["dfcbag","gda","dcafe","gcdeb","ag","ecgdaf","edagc","bcdaef","gcbadfe","gaef"],["gbced","dga","cbadef","fgecda"]],[["cagb","adgceb","cdb","cfgeda","egfbd","abcefd","decag","bc","cgebd","bgedfca"],["cegbd","dfegac","dbc","befdg"]],[["cbfe","bgefdc","ceabdfg","cf","dbgaef","gdfbac","edcga","gcfed","dfc","fbedg"],["fgbaed","fcd","fcegd","becf"]],[["degabf","bfg","bcgaf","gdacf","dbfc","gecfda","gcaeb","fagedbc","adfgbc","bf"],["egbdfa","gbf","adfbceg","dcfb"]],[["dbfae","dfbc","ecadg","cb","cbdea","fcebag","fgadbec","gadebf","bec","ceabfd"],["dbfc","bgfcead","agbedf","fdabe"]],[["dafcge","ecafbg","cegaf","egdac","abegd","cd","debfca","edc","cgfd","bfdeagc"],["dec","dc","ecd","dbgae"]],[["fgabce","bfa","acbfegd","fcegda","bfgd","acgfd","bcaed","bfcda","bf","cbagdf"],["bf","bafgcd","bfdg","dgbacfe"]],[["fgea","gad","fcbgaed","gdebc","afdeb","fagcbd","cbfeda","ag","egfdba","degab"],["dgeab","badge","eacfbdg","fdceba"]],[["fabdce","cagdb","gcb","bcefag","degba","dfagbc","dgcf","dcfab","egfcabd","cg"],["befcda","dbagc","cbdgfa","gcdf"]],[["be","fgaced","fdeag","badegf","fdbea","ebdg","bea","agfbec","ebgadcf","bcfad"],["acdfge","agbfce","debaf","dgafe"]],[["cdfbeg","bg","fegca","gdefac","cadbf","eadbcgf","cgb","egba","gcfbea","cagfb"],["gfaced","agfcb","cbdfaeg","cgfdabe"]],[["fadcebg","cgda","ebfag","adebc","fcebdg","fadbce","gd","begcda","bdg","gedba"],["dcga","fbage","dcabef","fcebadg"]],[["bfcga","adfbgc","fbcdage","gfedac","ab","gcfbe","cgafd","efabgd","gab","bdca"],["gcafd","cdba","gba","dfabgc"]],[["bdfae","gfa","cdgabe","egfba","fg","gfeadc","acegb","fgcb","fbecgad","ecafgb"],["bgeaf","agfecbd","fga","agdceb"]],[["dgab","ebfad","cdefgb","gbefd","fab","cefabg","fegcbda","aedcf","ba","ebadgf"],["defbag","afb","gbfead","dbefag"]],[["cfabed","ecabf","cgafdeb","bfc","fecbgd","dcab","cb","bfeda","eagfc","adfgeb"],["fgcae","dfbega","ebcdfg","fabec"]],[["eb","cbgaef","eagcfbd","caebd","gaedbc","badfc","abe","degac","dgeb","cgdeaf"],["aeb","gfaebc","bceafg","abcged"]],[["gdecba","ecbdgf","def","fcbade","fd","fdcg","bgfae","gdecb","gfbde","faegdbc"],["fbage","ecgdbf","egdfb","dfe"]],[["dc","dac","egcadbf","gadbe","cgaebd","abgcd","geadbf","agfced","edcb","gabfc"],["agcbefd","edbc","bacfg","cd"]],[["gaebfc","gdc","cedbg","dbeag","cefd","cd","bcfgde","cbgfda","bcegf","dabgecf"],["bgdea","dbgec","fecd","cfed"]],[["afd","dfcbga","dcbeagf","bfecda","egbcdf","dagec","fa","bgfa","fdbcg","fgadc"],["egbcdf","decga","gbfa","fa"]],[["fg","baefc","gafeb","dgaf","cbgdea","afegbd","fbg","cebgfd","gaecdfb","dbgae"],["ebfag","dgbae","gafd","abgedfc"]],[["cbaed","gedac","cefgbda","feba","be","cadebf","gdcefb","fcbad","bde","cdagbf"],["bcadef","cfgdab","fdabc","feab"]],[["cfbdg","fdgce","adgcbf","fb","cbf","acfegdb","adgebc","ebafdc","dbacg","agbf"],["fgba","fgced","ecfdabg","bf"]],[["fceabd","gfb","agfdb","deabg","beacgf","cfdgbae","fcdg","gf","abfdc","dfbgca"],["dbaeg","bfdga","dgeab","dfcg"]],[["gfde","facbde","dcgbf","fg","gbf","ecafgb","cfgdbe","ecdfb","adcgb","ecafbdg"],["gcdbf","fg","cfbdg","fdeg"]],[["fbgdce","bg","bacefg","decab","cbg","fecgd","egdcfa","dbfg","egdcb","fagdbce"],["gb","dcbea","fedbgc","fagecb"]],[["abgcef","fgbaedc","dfaebg","cgad","ad","egadcb","abd","cgbea","bfecd","cabde"],["efbcd","abdfeg","afbegd","ad"]],[["fagecdb","bcafg","ecadfb","fa","bagecf","cdgba","efbdcg","befgc","fac","agfe"],["bdfcge","ecgbf","cfedba","edagfcb"]],[["dgf","fcdbg","cegbd","fd","bfcega","daebgf","dfca","abgcf","gafbdc","fbeacgd"],["bcfdg","fdg","dfg","adcf"]],[["deb","cbdgae","edfbac","dbcgf","fbecga","gdfcbea","bgdec","ed","ecabg","egad"],["bgcfd","faedcb","cageb","ed"]],[["gecfba","dfagc","afdbc","adbcfg","cag","cabgdfe","fdega","cbdg","dbacfe","cg"],["afcbdeg","dabcf","cbafed","dcfga"]],[["feab","ae","cbgfe","agecf","bgecda","bgecdf","eca","gfebca","fcdbgea","cgfad"],["bgdfec","gcfbed","eca","cbdgaef"]],[["fbaceg","edcbaf","dba","becgd","egafb","degbfca","fbadeg","dafg","da","agebd"],["fbdega","gfebca","acebdf","gbefa"]],[["dbce","gfbec","defgb","ed","efdagc","def","gfbeca","abfgd","bgfedc","fcbgade"],["fdbgce","ebdfcg","cgfbdea","efcbgd"]],[["abcdfg","fcaegb","egf","dgcaf","bdecf","aged","bdeacfg","ge","dgcafe","gfcde"],["acbgfd","gcadf","cgbdaf","gafecb"]],[["fb","gbfaed","eabgdc","abcgef","adcbfge","dgfac","fecb","bgf","fcbga","cageb"],["acebg","cfeabg","edgcab","adgfbce"]],[["fad","ceafdg","dcfag","fbcadge","geadbf","deac","da","gcfea","gdcfb","efcagb"],["aegdfb","cgadf","aefbcg","bgdcf"]],[["dagcbf","ef","dacfg","gfdce","egf","ebdgc","dfcgea","fabdeg","aefc","ebdacfg"],["gdefc","dcfag","bgdceaf","acef"]],[["dbegf","eabcgd","ebdafg","fbdac","cbg","cefg","eagbdfc","cdbgf","gdfbce","cg"],["eabcdgf","gecadbf","decgbf","gc"]],[["degf","cbefd","bfcdeg","bfdaec","bcage","cfgdba","fg","fcg","fbcge","cefgdba"],["fged","cfgedab","fdgceb","efcbd"]],[["cgbdae","dbeca","bcfdeg","fcaged","edgca","be","cbdaf","ebd","gfbadec","egba"],["cefdgab","cdfega","bcgeda","agcbde"]],[["cdfgea","gbedacf","gacbf","cdb","decag","db","edcabf","gabedc","dgeb","bgdca"],["bcfag","bcgad","ecdgfab","bd"]],[["ebcg","cfgbae","acgdbef","eag","agdfc","ge","edgabf","cgefa","facbe","dacebf"],["cbgefa","agcfd","fgcad","dfgac"]],[["beagcf","dafcgbe","da","acd","bedcf","begacd","cdbae","cefadg","bagd","bgcae"],["da","fgbecad","bdcef","bfdec"]],[["dg","acgfebd","fagecb","bgeadf","ebfgc","gdb","cdbgf","dbafc","gecd","debfgc"],["egcbf","cafbd","facbd","afbegcd"]],[["geabd","cadefb","ec","eadgfcb","cedag","gdbeca","dec","gfbdae","dcfag","cbeg"],["ec","bdeafgc","cbdafe","ebcg"]],[["be","bfade","caefgb","eab","gdbafe","bedg","agfdb","edacfbg","gdcabf","daefc"],["acfegb","bae","fecadgb","bgcfea"]],[["be","acdfb","cgfae","cbe","agbe","fgeacbd","adegcf","bcfae","bgcefa","fgbecd"],["cfabeg","ecb","efcdbg","ageb"]],[["afbg","cfedb","dacfgb","fgdcb","bgfedac","cbdage","bg","acgdf","fadceg","dgb"],["cdbgfa","fgeadc","bafg","dfbce"]],[["debfc","efb","adgbce","ef","fbadec","dfcbg","feac","dacgebf","aebdc","eadgfb"],["fcdgb","efca","cbdeaf","edbca"]],[["gcbde","dgcbf","dfc","bfcgda","df","ceadgbf","gcabf","dbaf","gcefab","dfcega"],["adfb","egcdb","dgbce","bdfa"]],[["egbdca","bgfed","baefd","cfdgaeb","gdefc","gcbfed","gcfead","bg","cfgb","egb"],["dcbage","cbdgef","dgfbe","aedbcg"]],[["dceaf","fc","fcge","bgdaec","agced","dfbea","cgeabdf","adcfbg","fdc","egcfad"],["fedca","fadeb","dabegc","aedfb"]],[["acfbgd","efcda","cfagd","decg","de","efcgdab","eabfc","gdaecf","dae","bedfag"],["fceda","acdef","ed","cfeba"]],[["defbcg","ge","egb","eagbdc","afdgcb","cgbae","fcadebg","geda","dcagb","efcba"],["gdecba","abgce","gbadc","daeg"]],[["afbd","fadgce","gbfdea","fcgedb","bf","bgf","gefda","bfedgac","bgcea","gaebf"],["bgfaed","fdgecb","fbgedc","bfg"]],[["cbafgd","cbdge","bc","cbd","bcef","fgbde","afgbde","fgcbed","dgebfca","edcga"],["cb","cb","acged","fdgbec"]],[["acgd","dceagf","dc","bafde","fbaceg","ced","cdfbge","fdeca","egcabfd","cgefa"],["dc","egdcfa","afegcd","efcgbd"]],[["bgdfac","fb","aebgc","bfde","bdecaf","bfa","aebcf","edabfcg","cgdeaf","daefc"],["decfa","fb","baf","fcbdea"]],[["bdfegc","gebda","gecbfa","fedbg","fed","dgfc","fabdec","dbcagef","fd","gfcbe"],["edcfbag","dgfeb","cdeafb","fd"]],[["gbeadf","fdcga","ecadb","bceg","ge","egd","dgebacf","beafcd","aedgc","cgbade"],["dabec","dge","begdac","dgaebc"]],[["begc","dcgbfa","eb","dfeag","eafgb","bae","bcgaf","gfaebc","fbagecd","becfad"],["gabdcfe","fdcagb","bgcdaf","be"]],[["eca","febdcg","fedag","ecdaf","fcba","beagdc","fcdeb","ca","dbefca","acebfdg"],["ebdcgf","fdceb","gecdab","cedfbga"]],[["decfbga","abgdce","gefd","afd","aecdbf","gcfeda","acgde","cafbg","fd","fadcg"],["edgf","dafbceg","egfd","cedga"]],[["faedgbc","fbgaec","dacb","eba","geacdb","bcgefd","ba","bdegc","eadbg","gdaef"],["dfcbge","deabcg","bfecadg","gfcbaed"]],[["egfacbd","acdgf","gecdab","ebacf","abcfed","eg","begf","caegf","aeg","bfgeca"],["dafbcge","cadfg","fbace","cefdbag"]],[["dgcfbae","ac","gbfeca","badce","gcad","dfgcbe","defab","cea","acgdbe","dbgce"],["cgdeba","egcdb","gcad","cagd"]],[["dcfg","agdfbc","caedfgb","df","bagecf","daf","gcafb","ebcad","fdbac","agebdf"],["bdfage","fgdbac","daf","fd"]],[["agefbd","agcbfde","egafb","eg","adge","fge","bfaced","egdbcf","daefb","cabgf"],["bagef","afgbe","eg","efbcdg"]],[["adfegb","caefgb","ade","ecgd","cafed","dbfeacg","de","fgcae","fbcda","fgadce"],["dbefgac","eafcg","gbaefc","fedgac"]],[["dbafg","ecfga","gfbae","bae","egdbac","geabfc","gcedfab","ebcf","eb","cagdef"],["be","cbfe","bae","be"]],[["cfgadbe","eca","bcfadg","ebdgac","adgcb","ebdca","adbfe","egcb","cadfeg","ec"],["adebgc","feabd","cae","cgdfea"]],[["caefdg","cdfagbe","fadbc","afd","eacbd","fd","bcadeg","cgfba","dacfeb","bfed"],["df","afcgb","fceabdg","fda"]],[["edcgaf","cfbdag","cbfdaeg","ec","cae","bgeafc","cdafe","abfde","decg","gdcaf"],["eca","dbcafg","aec","ce"]],[["fbgae","cagef","egdbac","cg","gcdafbe","cfbg","bgefda","gce","ceadf","gebfac"],["gadbce","cdegba","gc","cg"]],[["bafgecd","bdf","ecabfg","dgbfe","dcefg","gbefa","bdea","bdfcga","bd","bgfdae"],["cdfagb","cfeabg","faebgd","fagbe"]],[["afg","dfcg","fg","eacdbg","fgadeb","cfdgea","ecagd","fcagebd","eacfg","bacfe"],["fg","dagecb","egdca","cfdg"]],[["dac","dc","fgcd","agbecf","gcdaef","agbed","edcabf","fgace","caged","faecdbg"],["dabge","gceaf","gdafecb","cdafgeb"]],[["aefbg","egf","bagcf","afegdc","dfgceab","begd","gafebd","eafbd","eg","fabcde"],["egadfb","feg","bgcfa","efg"]],[["fa","debfg","acgfdb","eagbc","dcebagf","cedfbg","dafe","baf","febga","eagbfd"],["af","cbfdga","dcfgab","befcdg"]],[["db","dbfe","fdbga","cafdg","adgceb","egbfa","dbg","bgfdcea","ceagbf","befagd"],["afdbge","dceabg","gdfab","fdaegb"]],[["fgeacdb","cadg","dfg","edfga","fdagce","dg","dfaec","gebfa","cbefgd","defabc"],["geabf","dfaec","cfdae","faegb"]],[["abdce","bafcg","gdecaf","cegba","fbcadge","adbcfe","degb","eg","bdcgae","eag"],["abdec","facbg","edgb","ebagcd"]],[["bcaef","fg","dgbcae","adegb","bafeg","feadcgb","egbfad","fdgb","fecagd","efg"],["agfeb","fge","fdgb","eadgb"]],[["dbfage","cdab","bgcaef","ecb","cb","dgfce","dfbce","fedbgac","deabf","beadcf"],["cbfed","dabfe","ebadf","cefbd"]],[["gcedb","ceafdg","dcg","gecdfb","dcfaeb","cg","egdba","befdgac","fdceb","gcfb"],["begdc","bedag","eadgb","dfecb"]],[["bf","dbcgea","eabdfc","feb","gbfeac","fagb","becga","fcdaebg","dcgef","gecfb"],["efbdcag","abceg","gcdabef","gcbef"]],[["ged","dagfbe","eg","cgfe","bgfacde","gedac","dceba","agcfd","cadegf","gcfdba"],["gefc","ge","ge","acegfbd"]],[["gfabed","aecdgf","ecbag","dge","gbdae","befd","bfgad","fdcabeg","de","fagbdc"],["egbad","afdbg","dgacef","gdafb"]],[["dabfegc","gbcad","gafd","acd","da","fgbadc","ecdabf","bfgca","fcabge","gbdec"],["gbface","fgcab","bdgac","ebdcg"]],[["afbceg","cdgfb","gb","afcbed","dfcbge","gbf","adfgc","fecbgad","egdb","bcdfe"],["fedbc","cfeabd","edbg","cfebgd"]],[["cbdae","gc","gdfc","ebgdf","gcafbe","fbaecdg","gbedc","ecg","fbgecd","fdebag"],["gcedb","ebgafc","acfgdeb","ceg"]],[["bdce","efacgd","dgfbc","ebfgad","bcfga","gdc","fgbedac","egdfb","dc","bfdgce"],["bagdfec","efdgb","ecbd","fdaegc"]],[["bdgefc","fbca","bc","gfbcae","fdcgae","gdaeb","cbega","gcb","efagdcb","feagc"],["gcb","bacefgd","ecdbgf","cfab"]],[["fdbe","defcbga","adf","cfgeba","gcdae","bacef","cfadgb","df","fdeca","dcefba"],["cbegfa","degfcab","fad","acgfbe"]],[["gabfdc","ebcfd","bacgf","da","fcgbea","aedbfcg","gdfa","eadcbg","cdfba","abd"],["dab","dabcf","afcgb","ad"]],[["gb","bfgcae","dbgf","cadeg","bagdc","gefadcb","gbc","acdbef","cgabdf","dbafc"],["gb","fbdcae","afdbgce","dabgc"]],[["cfgadbe","agecfd","ea","gedfc","edafc","fage","fbdgce","ead","aecdbg","fabdc"],["fcbdage","cdbage","fbadc","ae"]],[["decgbaf","edcgba","afgd","aebgfd","da","bfeag","gfbcae","bad","cebfd","bfeda"],["ecfdb","eagbf","efdba","eabgdf"]],[["cfdbae","dc","gbdef","fbedag","egbfcd","gafec","edc","edacgbf","egdcf","bdgc"],["fceag","gacfe","daegfb","bgdcef"]],[["cbgda","egdfb","agebd","cgedfb","aed","bfgdcea","ae","agdefb","efab","facedg"],["gdcaef","aefb","faeb","begfd"]],[["fdc","begdf","adecg","gfaced","cf","efac","abedfgc","cbedag","gdbacf","fecgd"],["cdf","fbgadc","cabgdf","acfe"]],[["fedbg","gabfe","feda","gde","fcdbg","de","dbegacf","bdfaeg","abcdeg","cegbfa"],["bgaef","gadebf","efgbac","gbefa"]],[["dgf","fgdbea","dg","dafcb","gdec","edcfbga","dbegfc","gbdcf","cfbge","gcebfa"],["bdfgc","dg","egcfab","bcdafge"]],[["ceg","daecb","gcfdea","fgacbe","ecadbfg","eg","gbacdf","cgabf","ebfg","ecabg"],["acgeb","bfgca","geacdf","cge"]],[["ge","geabf","gea","abecgf","fdabg","caedbf","egbc","cgebafd","cbfea","agdefc"],["feabc","bcdafe","age","eg"]],[["gecdba","ebdfg","gcdef","ecf","cefadb","fgac","cf","ecgafd","cbfgead","adgec"],["dfecg","afcg","bcfead","ecadg"]],[["gd","cbfad","fdagb","cfbeag","fabge","efabdg","aged","bdgfec","dgf","gbfadec"],["acefgb","eabfgc","becagf","bfgda"]],[["ebgc","fedabcg","fdbgce","fdebg","eg","badgf","ebcdf","edg","adcfeb","cfgade"],["bgefd","cbgefd","bgefd","abfdg"]],[["dgbfc","abecfg","gcdab","fcgdbe","dfge","cbdfea","defbc","fgc","dabgefc","gf"],["gf","dbgecf","bafgec","cgf"]],[["degbac","fda","cdbag","eafgbcd","df","fdbc","agfdcb","dabfg","fbgea","fcgade"],["fd","bdceafg","fdagbce","df"]],[["cedaf","fgeabc","egdbf","gbaedcf","aeg","cgda","dfaeg","cfdbea","fagdce","ga"],["febadc","gefad","bfacde","gae"]],[["gea","ebfgdc","bcae","cgafd","abecfgd","gbced","ea","gbdeaf","dcgae","gebcda"],["efgdab","fcegdb","cbgade","acged"]],[["cdabgef","gb","fceag","fgb","bfdgac","gbcfa","cbadfe","dfcegb","fbdca","bgda"],["bg","cbgfa","dcfgeb","afcgb"]],[["fcbage","adefc","gceda","bdegca","cbeag","dgeb","efacdgb","cfbgda","adg","dg"],["gad","gabced","gebd","dg"]],[["ecbdga","gedbf","dafeg","faecbdg","eacfg","dbaf","ad","dbfcge","gda","dfbeag"],["ad","gfbcde","dgfea","aecfg"]],[["agfbde","begfca","bca","baegc","bc","bcef","ecdgbfa","adegc","bgaef","acbfdg"],["fdbcag","baecg","cgdbaf","bcdagf"]],[["beafc","badfc","daecfb","fd","fad","fdec","badefg","cbdag","fbecgad","gecfab"],["dcfe","cbgeaf","gdcfabe","agdbc"]],[["caedgbf","fcgead","ca","gbadf","abcd","adcfbg","fegbc","dfaebg","gfbac","agc"],["fcgeda","dbac","afcgb","dafebg"]],[["gdfeb","gdbafe","bc","ecb","ebfagdc","bgfce","gfeca","fdcbge","aebdcf","bcdg"],["cdfbeg","gdbfe","gefcb","dbcafe"]],[["gfbca","gcdfe","dbafgc","cafgbe","eacfbgd","cdb","agdb","db","cgdbf","ecdbaf"],["adfcbe","abdgfc","cdb","fcabed"]],[["bcdaf","fbed","edbac","cdaegf","ed","dbgaecf","edc","ebgac","dbagfc","fdbace"],["cbgae","efdb","gcdafe","gbafedc"]],[["cdfba","cbdfae","cfga","bafdgc","aedfgbc","dbgef","dag","adgfb","bdaegc","ag"],["ebacgd","adfgcb","bdaefc","gfac"]],[["caefd","ce","abfdc","egcbdf","cfe","fgaced","bdgfea","gcae","fadcbge","eagfd"],["fcdae","fgecad","ec","cbefgd"]],[["eafbd","deb","aefdg","bd","aecfbg","bdcf","abcfe","gebcdaf","agdbec","bcaedf"],["dbcfae","abfecd","efabcd","cbafe"]],[["bdafeg","efg","gfcdae","bagfd","dfacgb","ef","dgfecba","befa","efbdg","dbceg"],["fe","gadbf","aebfdg","afeb"]],[["cgbef","ceb","bfdgcae","gedbac","acgfbe","be","gceafd","eacfg","fcdgb","fbea"],["abcedg","dcgefa","be","fcegadb"]],[["gacb","gfbaedc","fagdc","baf","gadcef","bfcdea","fgebd","gfabd","cfdgba","ba"],["baf","cadfg","gbfad","fab"]],[["gafce","df","cbdfge","gfd","gdecb","gecdf","fdeb","cadbeg","agdbcf","abgdcef"],["cgfea","abgcde","decgf","fgcdbea"]],[["egdbf","cbfgde","aed","befa","gfdbae","ea","abcgd","edfcga","bcaegdf","agdbe"],["bfae","cagbfde","cbgda","gedcaf"]],[["eb","dfbacge","dbgae","becafg","abe","gadfb","cdega","cedagb","ecfgad","debc"],["cfgeda","fagedc","afdbg","fdcega"]],[["efcba","becagd","gafcdbe","eafdbg","dagbcf","agfbd","gefd","de","bfaed","deb"],["fabce","bgaedc","ceadbg","bed"]],[["cbaedf","fdgebca","gdbe","dabce","eag","ge","bacge","bagcf","decfga","bgecda"],["defgabc","bceagd","aeg","gbacf"]],[["dgeabf","aefgcdb","ad","bcfae","bdacf","dacg","bgfdc","ebfdgc","gfdbac","abd"],["dcga","adgc","decfbg","bafce"]],[["fgcba","cbdfeag","dagfb","dcgbaf","dcaegb","ecbafg","bdg","bd","fcbd","faegd"],["bgdaec","feadg","cbdage","dcgafb"]],[["bdc","dcfgeb","ebgca","bdea","bdcga","abfecg","gdcaf","bd","aecdbfg","aebgdc"],["bade","bdecgf","bdc","cbadg"]],[["bcdaeg","facgbd","caedfb","aefdb","dgfbe","eba","ae","dcegfab","fcea","fbcad"],["cbafed","baecdf","ae","ceabfd"]],[["efcbg","egd","dg","cabgef","bfdceag","fgcbde","fdcea","gdfb","dgebca","dfcge"],["fdgb","gd","fbgd","deg"]],[["cbgdfa","ebgcfa","abdge","bdeca","efcgbad","cd","fbedac","abecf","adc","edcf"],["agebd","gfabedc","dabfegc","abfce"]],[["edg","abdgce","gcefb","dcbge","dgabfe","gcdab","de","cdebfga","cdae","fdabcg"],["gbdafc","agcdb","dgfceab","bafgdec"]],[["acdb","dgbfec","eagfcdb","dafbec","cae","ebdfc","ca","gfaed","acdef","gfebac"],["defac","begdfc","daegf","fdeacb"]],[["cgedf","gfadce","debgcf","fedagcb","aefbc","bcdagf","db","ebfcd","bfd","begd"],["db","cgfde","dbefc","gedcfb"]],[["afcbegd","dcfge","edgbf","bdg","fabd","dabfeg","gaebdc","abgecf","gfeab","db"],["debacg","gfbaec","fadbegc","afcgbe"]],[["fcbg","cdegf","ecdga","eacdfb","befdg","dcf","fc","dfegba","dbfgce","agdfcbe"],["dcf","adcge","fbcg","dgaefbc"]],[["bcfea","fcbead","ecd","cgeafb","aebcgd","bfed","bcgedfa","de","cadfg","fedac"],["de","egadfbc","debf","bfagec"]],[["efcdabg","afecbd","defba","cabfd","ebca","cgdaf","dfabeg","bc","efcdbg","fbc"],["bgdefc","afcgebd","gdefcb","efabgd"]],[["edbaf","agfbcde","gbfcae","ag","dega","aefcdb","dfbega","dfgbc","afdgb","bag"],["dagefb","ga","decbfa","aecbgf"]],[["cbdg","aegbcfd","badce","dgaebf","abdcfe","gad","cgeda","gd","fcage","ceagbd"],["fdcaeb","dbeca","beafdc","bdace"]],[["decb","dagfe","dcgbafe","fecbda","acfdb","adfbcg","agefbc","fec","ec","faced"],["fcadeb","cdagfb","agbfce","gcfdba"]],[["acdbef","dgca","gbfae","agecfdb","ebdcg","bda","bgeda","gedbfc","ad","bcadge"],["cgdbe","cdag","dcga","efdcgab"]],[["gc","efbdg","eadcf","ebcafg","adecgf","gfdbaec","gcf","gcda","dcgfe","dcbaef"],["gc","acedbf","fcead","gdca"]],[["bfgce","dabfg","ecdf","cebgfa","dfegb","ed","deb","fecbgda","becgda","cfbedg"],["cdgbefa","ebd","gafdb","cdgefba"]],[["ce","gecb","ecd","debaf","ecdfb","dcfega","dagcbef","fbgcd","bdcgaf","dcgfeb"],["dec","dfbec","agcfed","bedfa"]],[["cgbfd","gb","dcafg","gadb","gbfcea","bcfdeag","fcbde","fbg","gcbfad","agdfec"],["dcfgab","bfgdc","dfaceg","dfgac"]],[["bgacef","cdagf","bgdcae","gd","dag","dbagfc","fecagbd","fdbg","cfead","agbfc"],["gfcba","adgcf","facgb","gd"]],[["efdc","adbgc","gec","acfgde","feadg","gbecaf","fbdgae","agdec","daefbgc","ce"],["ec","cedf","cge","bdfagce"]],[["aecdbg","cabfe","acfgeb","bcefda","fgac","fdgeb","afdcbge","bcg","cebfg","gc"],["gcbfae","febcda","facg","baefcg"]],[["dgbafce","gfacdb","gecb","dcaefg","gfaeb","egf","gebacf","bdefa","bgcaf","eg"],["abfge","fgabe","fge","deagfc"]],[["ceafdb","dcbega","afd","gdbeaf","fdgea","fgeac","gbade","cbfadeg","fd","dfbg"],["adbcge","gdcfeab","afd","fd"]],[["dacegf","ed","dfcbg","cfgea","dcfge","fcgdbae","acgbef","ced","eagd","abefcd"],["dfbeac","fgcdb","geda","dbfgc"]],[["egbcdf","ecbdga","afegc","aefdbgc","dgeca","dge","dg","dcfbae","dgab","cdbea"],["gcead","eabdcf","gdeac","cfadbe"]],[["gca","fceagd","fdgbc","ga","fecab","fgcabed","bgcaf","cdbfge","adbg","acdfgb"],["agdb","bfadcg","bfgac","gbfca"]],[["acgdeb","baefd","fa","gdfa","bgdea","bdcfe","fdagebc","fdgbea","ecfgba","fab"],["adbecg","agcbed","febagc","feagcdb"]],[["fedagc","dcfge","ef","bgdcf","gdceba","egf","fead","edcag","gfbaec","fdgaebc"],["cgade","aecfdg","efg","eadf"]],[["dbagf","gcdefab","fc","badfc","cbaed","gfadbe","dgfc","gfbcad","gaebfc","bcf"],["cfb","cdbea","bdagf","fc"]],[["bae","be","gcadeb","dbge","dgebacf","eagcd","geabc","fbcga","eagfdc","edbafc"],["gcabf","ecdfbag","afbcg","cbgfa"]],[["bd","gdbcf","cbfegd","cfbeag","febdagc","fbd","fcgeb","decb","afgbed","dfgac"],["cbefg","eadcbfg","cbegfad","egdfcb"]],[["febacg","dega","cegfd","cefda","ae","agebcfd","abcdf","eca","defacg","ecgfbd"],["badcf","cae","bdcefg","acedf"]],[["geabcd","gdbcfa","gaedc","cbeagf","bdgeacf","gdefc","bdacg","ae","adbe","cae"],["gcebad","agfbdc","gefbcad","ea"]],[["fa","bfdacge","adecgb","eacf","bdfgac","gfdbe","aegdc","egacfd","gadfe","fga"],["gedfb","egfbd","efagd","dagfbc"]],[["gcdb","dg","beagdf","feacg","cebgdfa","afbcd","adcgf","dbfcga","ebfdac","agd"],["gd","acdfg","dcbaf","gacfe"]],[["aefgbd","cgfdb","gfdea","eabfgc","dcgfe","cfe","ceda","gdcaef","ce","fdeabgc"],["bdcgf","edgaf","cbdfg","egfbda"]],[["facegb","cfdabeg","bd","cedgbf","adcfeb","cfabe","cdb","eadb","cgdfa","dfbca"],["dfbca","eadb","adecbgf","bdc"]],[["bacfeg","agfcdeb","acegf","gfcade","ecagbd","fdbag","afegd","cdfe","ed","edg"],["dfce","egd","degaf","dagfb"]],[["df","gdfcea","efbadg","cegafbd","eacfd","fad","cedbga","dgaec","dfcg","fbcea"],["caedg","dgafbe","edgac","df"]],[["bfdac","cdbgfa","cefbgd","bfag","afgbdec","cdgafe","cbfdg","acf","ecbda","fa"],["dgcfae","af","cabfd","beadc"]],[["befgd","dea","ecab","baefcd","gfbcad","ea","bafcd","dbcgefa","afebd","cadfeg"],["gfbadc","eda","cadgfb","eda"]],[["gf","cgadb","gebf","becfdga","gaefcd","febac","gcbaf","cbfdea","bfgeac","fag"],["fg","afcbg","efbg","afg"]],[["ba","aebg","gafdceb","bca","bdacg","dagcf","fcbdae","gcbed","cadebg","bgcefd"],["dcagf","gdabc","afgcd","edcfgb"]],[["de","dbec","bfaecdg","gdfeca","fegcb","edg","dbgaf","fceabg","febcgd","bgdef"],["afdbg","adbfg","debfgc","bdgfa"]],[["afbced","adebfg","efagdbc","caebf","afgec","ecgb","ega","eg","fgdac","acegfb"],["aedgbf","cbge","egbfda","badfgec"]],[["fg","gbfcdea","eafbcd","fdaeb","cdage","egf","agdefb","fdcbge","efgda","fgab"],["deacg","cdage","gedca","adfeb"]],[["gde","gbdc","dg","fdgec","dfaegb","fedca","bcgefd","fbeacg","gadecbf","fcbeg"],["cgfabe","edcgf","fgeabdc","cbefg"]],[["befcdg","agbcef","fcbdeag","gdfae","bdecf","eab","fcdeab","ab","efbad","bcad"],["cfgeba","befda","aefgd","degbcfa"]],[["abcef","dbfaegc","aefcg","dcgbae","fbcg","efgacb","cg","cdabfe","gec","dfeag"],["dgfae","gdefa","agcbde","afbced"]],[["dgf","fcbega","afdbeg","fgabe","dg","efadg","bged","adfbceg","agbcfd","fedca"],["aefgb","begd","fceda","debg"]],[["cdgaeb","ba","befgdca","defbc","gdecaf","bae","gabc","afgdeb","gedac","decab"],["fbecd","bae","gdecfa","edcba"]],[["ebagfd","dfg","dcbaeg","dgbceaf","gf","gacdf","fcade","gacbd","gcfb","fbagcd"],["adgfc","acbgd","edbagf","degabc"]],[["gba","eagbcf","gb","gbacf","dacgebf","bceg","gcafed","acfeg","acbfd","adegfb"],["abfcdeg","dbcfage","faecg","afebgc"]]];

function count1478() {
  let count = 0;
  for (let i = 0, digits; i < INPUT.length; i++) {
    digits = INPUT[i][1];
    for (let j = 0; j < digits.length; j++) {
      switch (digits[j].length) {
        case 2:
        case 4:
        case 3:
        case 7:
          count++;
          break;
        default:
          break;
      }
    }
  }
  return count;
} 
// count1478();

//////////////////

// SEGMENT 1 ==> digit with a length of 2 is 1 and digit with a length of 3 is 7, and the segment not shared is segment 1

// SEGMENT 2 ==> only segment to appear in 6 different digits

// SEGMENT 3 ==> other segment besides 2, 4, and 7 in digit 4

// SEGMENT 4 ==> other segment besides 1 and 7 in digit 7

// SEGMENT 5 ==> only segment to appear in 4 different digits

// SEGMENT 6 ==> last unknown segment

// SEGMENT 7 ==> only segment to appear in 9 different digits

// DIGIT 1 ==> only digit using 2 segments

// DIGIT 2 ==> only digit not using segment 7

// DIGIT 3 ==>

// DIGIT 4 ==> only digit using 4 segments

// DIGIT 5 ==>

// DIGIT 6 ==>

// DIGIT 7 ==> only digit using 3 segment

// DIGIT 8 ==> only digit using 7 segments

// DIGIT 9 ==>

// DIGIT 0 ==>

// order to work in:
// 1. segments 1, 2, 5, 7
// 2. segment 4
// 3. segment 3
// 4. segment 6

function findSegment1 (digits) {
  let digit1, digit7, segment1;
  for (let i = 0, digit; i < 10; i++) {
    digit = digits[i];
    if (digit.length === 2) {
      digit1 = digit;
    } else if (digit.length === 3) {
      digit7 = digit;
    }
  }
  for (let i = 0, segment; i < 3; i++) {
    segment = digit7[i];
    if (digit1.indexOf(segment) === -1) {
      segment1 = segment;
    }
  }
  return segment1;
}
const sampleDigits = ["acedgfb","cdfbe","gcdfa","fbcad","dab","cefabd","cdfgeb","eafb","cagedb","ab"];
const sampleSegments = {1:"d",2:"e",3:"f",4:"a",5:"g",6:"c",7:"b"};
console.assert(findSegment1(sampleDigits) === sampleSegments[1], "findSegment1() test failed");

function findSegments257 (digits) {
  let segments = {2:null,5:null,7:null}
  let segmentAppearances = {a:0,b:0,c:0,d:0,e:0,f:0,g:0};
  for (let i = 0; i < digits.length; i++) {
    for (let j = 0, segment; j < digits[i].length; j++) {
      segment = digits[i][j];
      segmentAppearances[segment]++;
    }
  }
  for (let segment in segmentAppearances) {
    switch (segmentAppearances[segment]) {
      case 6:
        segments[2] = segment;
        break;
      case 4:
        segments[5] = segment;
        break;
      case 9:
        segments[7] = segment;
        break;
      default:
        break;
    }
  }
  return segments;
}

// sampleDigits segment appearances ==> {a:8,b:9,c:7,d:8,e:6,f:7,g:4}
console.assert(findSegments257(sampleDigits)[2] === sampleSegments[2], "findSegments257() test failed");
console.assert(findSegments257(sampleDigits)[5] === sampleSegments[5], "findSegments257() test failed");
console.assert(findSegments257(sampleDigits)[7] === sampleSegments[7], "findSegments257() test failed");

function findSegment4 (digits, foundSegments) {
  let digit7;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i].length === 3) {
      digit7 = digits[i];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (digit7[i] !== foundSegments[1] &&
        digit7[i] !== foundSegments[7]) {
      return digit7[i];
    }
  }
}

console.assert(findSegment4(sampleDigits, {1:"d",2:"e",5:"g",7:"b"}) === sampleSegments[4], "findSegment4() test failed");

function findSegment3 (digits, foundSegments) {
  let digit4;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i].length === 4) {
      digit4 = digits[i];
    }
  }
  let foundSegmentsIn4 = [foundSegments[2], foundSegments[4], foundSegments[7]];
  for (let i = 0; i < 4; i++) {
    if (foundSegmentsIn4.indexOf(digit4[i]) === -1) {
      return digit4[i];
    }
  }
}

console.assert(findSegment3(sampleDigits, {1:"d",2:"e",3:null,4:"a",5:"g",6:null,7:"b"}) === sampleSegments[3], "findSegment3() test failed");

function findSegment6 (foundSegments) {
  let alpha = "abcdefg";
  for (let segment in foundSegments) {
    if(!foundSegments[segment]) continue;
    let i = alpha.indexOf(foundSegments[segment]);
    alpha = alpha.slice(0,i) + alpha.slice(i+1);
  }
  return alpha;
}

console.assert(findSegment6({1:"d",2:"e",3:"f",4:"a",5:"g",6:null,7:"b"}) === sampleSegments[6], "findSegment6() test failed");

function findSegments(digits) {
  let segments = {1:null,2:null,3:null,4:null,5:null,6:null,6:null,7:null};
  segments[1] = findSegment1(digits);
  segments = Object.assign(segments, findSegments257(digits));
  segments[4] = findSegment4(digits, segments);
  segments[3] = findSegment3(digits, segments);
  segments[6] = findSegment6(segments);
  return segments;
}

console.assert(findSegments(sampleDigits)[1] === sampleSegments[1], "findSegments() test failed");
console.assert(findSegments(sampleDigits)[2] === sampleSegments[2], "findSegments() test failed");
console.assert(findSegments(sampleDigits)[3] === sampleSegments[3], "findSegments() test failed");
console.assert(findSegments(sampleDigits)[4] === sampleSegments[4], "findSegments() test failed");
console.assert(findSegments(sampleDigits)[5] === sampleSegments[5], "findSegments() test failed");
console.assert(findSegments(sampleDigits)[6] === sampleSegments[6], "findSegments() test failed");
console.assert(findSegments(sampleDigits)[7] === sampleSegments[7], "findSegments() test failed");

function arraysAreEqual(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function translateDigit(digit, segmentsKey) {
  const segmentsOfAllDigits = [
    [1,2,4,5,6,7],
    [4,7],
    [1,3,4,5,6],
    [1,3,4,6,7],
    [2,3,4,7],
    [1,2,3,6,7],
    [1,2,3,5,6,7],
    [1,4,7],
    [1,2,3,4,5,6,7],
    [1,2,3,4,6,7],
    [1,2,4,5,6,7]
  ];
  let segmentsOfThisDigit = [];
  for (let i = 1; i <= 7; i++) {
    if (digit.indexOf(segmentsKey[i]) > -1) {
      segmentsOfThisDigit.push(i);
    }
  }
  for (let i = 0; i < 10; i++) {
    if (arraysAreEqual(segmentsOfThisDigit, segmentsOfAllDigits[i])) {
      return i;
    }
  }
}

const translatedSampleDigits = [8,5,2,3,7,9,6,4,0,1];
for (let i = 0; i < 10; i++) {
  console.assert(translateDigit(sampleDigits[i], sampleSegments) === translatedSampleDigits[i], "translateDigit() test failed");
}

function translateDigits(digits, scrambledDigitsKey) {
  let segmentsKey = findSegments(scrambledDigitsKey);
  let translatedDigits = [];
  for (let i = 0; i < digits.length; i++) {
    translatedDigits.push(translateDigit(digits[i], segmentsKey));
  }
  return Number(translatedDigits.join(''));
}

let sampleDisplay = ["cdfeb","fcadb","cdfeb","cdbaf"];
console.assert(translateDigits(sampleDisplay, sampleDigits) === 5353, "translateDigits() test failed");

function getFinalAnswer() {
  let sum = 0;
  for (let i = 0, scrambledDigitsKey, digits; i < INPUT.length; i++) {
    scrambledDigitsKey = INPUT[i][0];
    digits = INPUT[i][1];
    sum += translateDigits(digits, scrambledDigitsKey);
  }
  return sum;
}

getFinalAnswer();
//BINGGGGGGG