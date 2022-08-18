// Help when hovering the simple TXT build (entering)
function simpleTxtOverlayEnterHelp() {
    document.getElementById('hybridSimpleTxtOverlayText').innerHTML = 'What is the simple TXT format for AoE4_Overlay?';
    document.getElementById('hybridSimpleTxtOverlayText').style.color = '#fff';
}

// Help when hovering the simple TXT build (leaving)
function simpleTxtOverlayLeaveHelp() {
    document.getElementById('hybridSimpleTxtOverlayText').innerHTML = 'Simple TXT Build Order to Clipboard';
    document.getElementById('hybridSimpleTxtOverlayText').style.color = 'aqua';
}

// Help when hovering the Illustrated Build Order (entering)
function illustratedOverlayEnterHelp() {
    document.getElementById('hybridIllustratedOverlayText').innerHTML = 'What is the Illustrated format for AoE4_Overlay?';
    document.getElementById('hybridIllustratedOverlayText').style.color = '#fff';
}

// Help when hovering the Illustrated Build Order (leaving)
function illustratedOverlayLeaveHelp() {
    document.getElementById('hybridIllustratedOverlayText').innerHTML = 'Illustrated Build Order to Clipboard';
    document.getElementById('hybridIllustratedOverlayText').style.color = 'aqua';
}

/** Copy for AoE4_Overlay event
 * https://github.com/FluffyMaguro/AoE4_Overlay
 *
 * @param input - input to convert
 */
function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

// Get the dictionary of images translations (for Illustrated Build Order), common to all civilizations
function getCommonImages() {
    return {
        'nonexistent_age_1': 'age/age_1.png',
        'age2dark': 'age/age_2.png',
        'age3dark': 'age/age_3.png',
        'age4dark': 'age/age_4.png',
        'nonexistent_age_unknown': 'age/age_unknown.png',

        'keep': 'building_defensive/keep.png',
        'outpost': 'building_defensive/outpost.png',
        'palisadegate': 'building_defensive/palisade-gate.png',
        'palisadewall': 'building_defensive/palisade-wall.png',
        'stonewall': 'building_defensive/stone-wall.png',
        'stonegate': 'building_defensive/stone-wall-gate.png',
        'stoneoutpost': 'building_defensive/stone-wall-tower.png',

        'wheatfield': 'building_economy/farm.png',
        'house': 'building_economy/house.png',
        'lumbercamp': 'building_economy/lumber-camp.png',
        'market': 'building_economy/market.png',
        'gristmill': 'building_economy/mill.png',
        'goldminingcamp': 'building_economy/mining-camp.png',
        'town_center': 'building_economy/town-center.png',

        'archeryrange': 'building_military/archery-range.png',
        'barracks': 'building_military/barracks.png',
        'dock': 'building_military/dock.png',
        'siegeworkshop': 'building_military/siege-workshop.png',
        'stable': 'building_military/stable.png',

        'monastery': 'building_religious/monastery.png',
        'mosque': 'building_religious/mosque.png',

        'blacksmith': 'building_technology/blacksmith.png',
        'university': 'building_technology/university.png',

        'civiconsmallabbasid': 'civilization_flag/CivIcon-AbbasidAoE4_spacing.png',
        'civiconsmallchinese': 'civilization_flag/CivIcon-ChineseAoE4_spacing.png',
        'civiconsmallsultinates': 'civilization_flag/CivIcon-DelhiAoE4_spacing.png',
        'civiconsmallbritons': 'civilization_flag/CivIcon-EnglishAoE4_spacing.png',
        'civiconsmallfrench': 'civilization_flag/CivIcon-FrenchAoE4_spacing.png',
        'civiconsmallholyromanempirel': 'civilization_flag/CivIcon-HREAoE4_spacing.png',
        'civiconsmallmongols': 'civilization_flag/CivIcon-MongolsAoE4_spacing.png',
        'civiconsmallrus': 'civilization_flag/CivIcon-RusAoE4_spacing.png',

        'berrybush': 'resource/berrybush.png',
        'boar': 'resource/boar.png',
        'deer': 'resource/deer.png',
        'fish': 'resource/fish.png',
        'gaiatreeprototypetree': 'resource/gaiatreeprototypetree.png',
        'resourcefoodicon': 'resource/resource_food.png',
        'resourcegoldicon': 'resource/resource_gold.png',
        'resourcestoneicon': 'resource/resource_stone.png',
        'resourcewoodicon': 'resource/resource_wood.png',
        'sheep': 'resource/sheep.png',
        'wolf': 'resource/wolf.png',

        'arrowslitemplacement': 'technology_defensive/arrow-slits.png',
        'boilingoil': 'technology_defensive/boiling-oil.png',
        'cannon': 'technology_defensive/cannon-emplacement.png',
        'architecture': 'technology_defensive/court-architects.png',
        'duplicate_1_stoneoutpost': 'technology_defensive/fortify-outpost.png',
        'duplicate_1_springald': 'technology_defensive/springald-emplacement.png',

        'goldgather2': 'technology_economy/acid-distilization.png',
        'woodgather3': 'technology_economy/crosscut-saw.png',
        'goldgather3': 'technology_economy/cupellation.png',
        'woodgather1': 'technology_economy/double-broadaxe.png',
        'driftnets': 'technology_economy/drift-nets.png',
        'extendedlines': 'technology_economy/extended-lines.png',
        'foodgather2': 'technology_economy/fertilization.png',
        'treefellrate': 'technology_economy/forestry.png',
        'foodgather1': 'technology_economy/horticulture.png',
        'woodgather2': 'technology_economy/lumber-preservation.png',
        'foodgather3': 'technology_economy/precision-cross-breeding.png',
        'huntingscout': 'technology_economy/professional-scouts.png',
        'goldgather1': 'technology_economy/specialized-pick.png',
        'huntingvillager': 'technology_economy/survival-techniques.png',
        'silkbowstring': 'technology_economy/textiles.png',
        'wheelbarrow': 'technology_economy/wheelbarrow.png',

        'rangedarmortechnology3': 'technology_military/angled-surfaces.png',
        'rangeddamagetechnology2': 'technology_military/balanced-projectiles.png',
        'biology': 'technology_military/biology.png',
        'meleedamagetechnology1': 'technology_military/bloomery.png',
        'chemistry': 'technology_military/chemistry.png',
        'meleedamagetechnology3': 'technology_military/damascus-steel.png',
        'meleedamagetechnology2': 'technology_military/decarbonization.png',
        'elitearmytactics': 'technology_military/elite-army-tactics.png',
        'meleearmortechnology1': 'technology_military/fitted-leatherwork.png',
        'mathematics': 'technology_military/geometry.png',
        'greasedaxle': 'technology_military/greased-axles.png',
        'firearrows': 'technology_military/incendiary-arrows.png',
        'meleearmortechnology2': 'technology_military/insulated-helm.png',
        'rangedarmortechnology1': 'technology_military/iron-undermesh.png',
        'meleearmortechnology3': 'technology_military/master-smiths.png',
        'militaryacademy': 'technology_military/military-academy.png',
        'rangeddamagetechnology3': 'technology_military/platecutter-point.png',
        'siegeengineers': 'technology_military/siege-engineering.png',
        'siegewrapping': 'technology_military/siege-works.png',
        'rangeddamagetechnology1': 'technology_military/steeled-arrow.png',
        'rangedarmortechnology2': 'technology_military/wedge-rivets.png',

        'additionalsails': 'technology_naval/additional-sails.png',
        'armoredhull': 'technology_naval/armored-hull.png',
        'wargalleycannon': 'technology_naval/chaser-cannons.png',
        'demolitionship': 'technology_naval/explosives.png',
        'duplicate_2_springald': 'technology_naval/extra-ballista.png',
        'navigatorlookout': 'technology_naval/navigator-lookout.png',

        'herbalmedicine': 'technology_religious/herbal-medicine.png',
        'piety': 'technology_religious/piety.png',
        'tithebarn': 'technology_religious/tithe-barns.png',

        'adjustablecrossbar': 'technology_units/adjustable-crossbars.png',
        'rollershuttertrigger': 'technology_units/roller-shutter-triggers.png',

        'horseman1': 'unit_cavalry/horseman-1.png',
        'horseman2': 'unit_cavalry/horseman-1.png',
        'knight2': 'unit_cavalry/knight-2.png',
        'knight3': 'unit_cavalry/knight-2.png',
        'knight4': 'unit_cavalry/knight-2.png',
        'lancer3': 'unit_cavalry/lancer-4.png',
        'lancer_3': 'unit_cavalry/lancer-4.png',
        'lancer_4': 'unit_cavalry/lancer-4.png',
        'scout': 'unit_cavalry/scout.png',

        'archer2': 'unit_infantry/archer-2.png',
        'crossbowman2': 'unit_infantry/crossbowman-3.png',
        'handcannon': 'unit_infantry/handcannoneer-4.png',
        'manatarms1': 'unit_infantry/man-at-arms-1.png',
        'manatarms2': 'unit_infantry/man-at-arms-1.png',
        'manatarms3': 'unit_infantry/man-at-arms-1.png',

        'fireship': 'unit_ship/demolition-ship.png',
        'fishingboat': 'unit_ship/fishing-boat.png',
        'wargalley': 'unit_ship/galley.png',
        'tradeship': 'unit_ship/trade-ship.png',
        'transport': 'unit_ship/transport-ship.png',

        'ram': 'unit_siege/battering-ram.png',
        'ram2': 'unit_siege/battering-ram.png',
        'bombard': 'unit_siege/bombard.png',
        'culverin': 'unit_siege/culverin-4.png',
        'mangonel': 'unit_siege/mangonel-3.png',
        'ribauldequin': 'unit_siege/ribauldequin-4.png',
        'siegetower': 'unit_siege/siege-tower.png',
        'siegetower2': 'unit_siege/siege-tower.png',
        'springald': 'unit_siege/springald.png',
        'trebuchet3': 'unit_siege/trebuchet.png',

        'monk3': 'unit_worker/monk-3.png',
        'tradecart': 'unit_worker/trader.png',
        'villager': 'unit_worker/villager.png',
        'villagerAD': 'unit_worker/villager.png',
        'villagerCH': 'unit_worker/villager.png',
        'villagerDS': 'unit_worker/villager.png',
        'villagerEN': 'unit_worker/villager.png',
        'villagerFR': 'unit_worker/villager.png',
        'villagerHR': 'unit_worker/villager.png',
        'villagerMO': 'unit_worker/villager.png',
        'villagerRU': 'unit_worker/villager.png'
    };
}

/** Get the dictionary of images translations (for Illustrated Build Order), specific to the currently selected civilization
 *
 * @param civ_name - civilization name
 */
function getCivilizationImages(civ_name) {
    if (civ_name === 'English') {
        return {
            'buildingwonderage3westminsterabbeyeng': 'landmark_english/abbey-of-kings.png',
            'buildingwonderage2windsorcastleeng': 'landmark_english/berkshire-palace.png',
            'buildingwonderage4canterburycathedraleng': 'landmark_english/cathedral-of-st-thomas.png',
            'buildingwonderage1westminsterhalleng': 'landmark_english/council-hall.png',
            'buildingwonderage2westminsterpalace': 'landmark_english/kings-palace.png',
            'buildingwonderage1whitetower': 'landmark_english/the-white-tower.png',
            'buildingwonderage4whitehallpalaceeng': 'landmark_english/wynguard-palace.png',

            'armorclad': 'technology_english/armor-clad.png',
            'arrowvolley': 'technology_english/arrow-volley.png',
            'enclosures': 'technology_english/enclosures.png',
            'networkofcitadels': 'technology_english/network-of-citadels.png',
            'setupcamp': 'technology_english/setup-camp.png',
            'shatteringprojectiles': 'technology_english/shattering-projectiles.png',
            'shipwrights': 'technology_english/shipwrights.png',

            'longarcher_2': 'unit_english/longbowman-2.png',

            'warship': 'unit_ship/carrack.png',
            'generalship': 'unit_ship/hulk.png'
        };
    } else if (civ_name === 'French') {
        return {
            'buildinglandmarkage2marchedelaville': 'landmark_french/chamber-of-commerce.png',
            'buildinglandmarkage3ecoledepudreacanon': 'landmark_french/college-of-artillery.png',
            'buildinglandmarkage1hoteldevillecentral': 'landmark_french/guild-hall.png',
            'buildingwonderage4lagrandecathedral': 'landmark_french/notre-dame.png',
            'buildinglandmarkage2lachateaurouge': 'landmark_french/red-palace.png',
            'buildinglandmarkage3legrandeuniversity': 'landmark_french/royal-institute.png',
            'buildinglandmarkage1casernescentrales': 'landmark_french/school-of-cavalry.png',

            'cantledsaddle': 'technology_french/cantled-saddles.png',
            'chivalry': 'technology_french/chivalry.png',
            'crossbowstirrups': 'technology_french/crossbow-stirrups.png',
            'enlistmentincentives': 'technology_french/enlistment-incentives.png',
            'crossbowdrills': 'technology_french/gambesons.png',
            'generalshipgunpowder': 'technology_french/long-guns.png',
            'bloodlines': 'technology_french/royal-bloodlines.png',

            'arbaletrier3': 'unit_french/arbaletrier-3.png',
            'cannon': 'unit_french/cannon-4.png',
            'galleass': 'unit_french/galleass.png',
            'knight2': 'unit_french/royal-knight-2.png',
            'knight3': 'unit_french/royal-knight-2.png',
            'knight4': 'unit_french/royal-knight-2.png',

            'warship': 'unit_ship/carrack.png',
            'generalship': 'unit_ship/hulk.png'
        };
    } else if (civ_name === 'Delhi') {
        return {
            'buildinglandmarkage2sirifort': 'landmark_delhi/compound-of-the-defender.png',
            'buildinglandmarkage1landmarkquwwatulislam': 'landmark_delhi/dome-of-the-faith.png',
            'buildingwonderage4khanbaliq': 'landmark_delhi/great-palace-of-agra.png',
            'duplicate_1_buildinglandmarkage3bijaymandalpalace': 'landmark_delhi/hisar-academy.png',
            'buildinglandmarkage2khijimosque': 'landmark_delhi/house-of-learning.png',
            'buildinglandmarkage3bijaymandalpalace': 'landmark_delhi/palace-of-the-sultan.png',
            'buildinglandmarkage1qutubminar': 'landmark_delhi/tower-of-victory.png',

            'allseeingeye': 'technology_delhi/all-seeing-eye.png',
            'elephantarmor': 'technology_delhi/armored-beasts.png',
            'efficientproduction': 'technology_delhi/efficient-production.png',
            'forcemarch': 'technology_delhi/forced-march.png',
            'heartyrations': 'technology_delhi/hearty-rations.png',
            'improvedswordsteel': 'technology_delhi/honed-blades.png',
            'spotters': 'technology_delhi/lookout-towers.png',
            'patchworkrepairs': 'technology_delhi/patchwork-repairs.png',
            'populationincrease': 'technology_delhi/reinforced-foundations.png',
            'sanctity': 'technology_delhi/sanctity.png',
            'siegeelephants': 'technology_delhi/siege-elephant.png',
            'torcharmor': 'technology_delhi/slow-burning-defenses.png',
            'swiftness': 'technology_delhi/swiftness.png',
            'tranquilvenue': 'technology_delhi/tranquil-venue.png',
            'villagefortresses': 'technology_delhi/village-fortresses.png',
            'zeal': 'technology_delhi/zeal.png',

            'monk': 'unit_delhi/scholar.png',
            'towerwarelephant': 'unit_delhi/tower-elephant-3.png',
            'warelephant': 'unit_delhi/war-elephant.png',

            'generalship': 'unit_ship/baghlah.png',
            'wargalley': 'unit_ship/dhow.png',
            'fireship': 'unit_ship/explosive-dhow.png',
            'warship': 'unit_ship/xebec.png',

            'university': 'building_technology/madrasa.png'
        };
    } else if (civ_name === 'Mongols') {
        return {
            'ger': 'building_mongols/ger.png',
            'buildingovoomon': 'building_mongols/ovoo.png',
            'pasture': 'building_mongols/pasture.png',
            'monastery': 'building_mongols/prayer-tent.png',

            'buildingwonderage1deerstonesmon': 'landmark_mongols/deer-stones.png',
            'buildingwonderage4khanbaliq': 'landmark_mongols/khaganate-palace.png',
            'buildingwonderage1kurultaimon': 'landmark_mongols/kurultai.png',
            'buildingwonderage4monumentofthegreatkhan': 'landmark_mongols/monument-of-the-great-khan.png',
            'buildingwonderage2kharakhoto': 'landmark_mongols/steppe-redoubt.png',
            'buildingwonderage2karakorum': 'landmark_mongols/the-silver-tree.png',
            'buildingwonderage4stupa': 'landmark_mongols/the-white-stupa.png',

            'firedamage': 'technology_mongols/additional-torches.png',
            'efficiencytraining': 'technology_mongols/monastic-shrines.png',
            'piracy': 'technology_mongols/piracy.png',
            'raidbounty': 'technology_mongols/raid-bounty.png',
            'mangudaiarcherdamage': 'technology_mongols/siha-bow-limbs.png',
            'stonebounty': 'technology_mongols/stone-bounty.png',
            'stonetrade': 'technology_mongols/stone-commerce.png',
            'fasterpacking': 'technology_mongols/superior-mobility.png',
            'signalarrowduration': 'technology_mongols/whistling-arrows.png',
            'ortoonetwork': 'technology_mongols/yam-network.png',

            'unitkhan1mon': 'unit_mongols/khan-1.png',
            'wargalley': 'unit_mongols/light-junk.png',
            'horsearcher2': 'unit_mongols/mangudai.png',
            'horsearcher_3': 'unit_mongols/mangudai.png',
            'horsearcher_4': 'unit_mongols/mangudai.png',
            'monk3': 'unit_mongols/shaman.png',
            'trebuchet3': 'unit_mongols/traction-trebuchet.png',

            'warship': 'unit_ship/baochuan.png',
            'fireship': 'unit_ship/explosive-junk.png',
            'generalship': 'unit_ship/war-junk.png'
        };
    } else if (civ_name === 'Holy Roman Empire') {
        return {
            'buildinglandmarkage1palatinechapel': 'landmark_hre/aachen-chapel.png',
            'buildinglandmarkage2nurembergcastle': 'landmark_hre/burgrave-palace.png',
            'buildinglandmarkage3eltzcastle': 'landmark_hre/elzbach-palace.png',
            'buildingwonderage4glucksburgcastle': 'landmark_hre/great-palace-of-flensburg.png',
            'duplicate_1_buildinglandmarkage2bambergcathedral': 'landmark_hre/meinwerk-palace.png',
            'buildinglandmarkage3hollenzollerncastle': 'landmark_hre/palace-of-swabia.png',
            'buildinglandmarkage2bambergcathedral': 'landmark_hre/regnitz-cathedral.png',

            'benediction': 'technology_hre/benediction.png',
            'devoutness': 'technology_hre/devoutness.png',
            'firestation': 'technology_hre/fire-stations.png',
            'manatarmsmaces': 'technology_hre/heavy-maces.png',
            'inspiredinfantry': 'technology_hre/inspired-warriors.png',
            'marchingdrills': 'technology_hre/marching-drills.png',
            'reinforcedefences': 'technology_hre/reinforced-defenses.png',
            'rivetedchain': 'technology_hre/riveted-chain-mail.png',
            'firearmor': 'technology_hre/slate-and-stone-construction.png',
            'twohandedweapons': 'technology_hre/two-handed-weapon.png',

            'landskrecht3': 'unit_hre/landsknecht-3.png',
            'landskrecht_4': 'unit_hre/landsknecht-3.png',
            'monk': 'unit_hre/prelate.png',

            'warship': 'unit_ship/carrack.png',
            'generalship': 'unit_ship/hulk.png'
        };
    } else if (civ_name === 'Chinese') {
        return {
            'granary': 'building_chinese/granary.png',
            'pagoda': 'building_chinese/pagoda.png',
            'village': 'building_chinese/village.png',

            'buildinglandmarkage2clocktower': 'landmark_chinese/astronomical-clocktower.png',
            'buildinglandmarkage1spiritway': 'landmark_chinese/barbican-of-the-sun.png',
            'buildingwonderage4forbiddencity': 'landmark_chinese/enclave-of-the-emperor.png',
            'buildinglandmarkage3greatwall': 'landmark_chinese/great-wall-gatehouse.png',
            'buildinglandmarkage1academy': 'landmark_chinese/imperial-academy.png',
            'buildinglandmarkage2palace': 'landmark_chinese/imperial-palace.png',
            'buildinglandmarkage3zhengyangmen': 'landmark_chinese/spirit-way.png',

            'ancienttechniques': 'technology_chinese/ancient-techniques.png',
            'battlehardened': 'technology_chinese/battle-hardened.png',
            'extrahammocks': 'technology_chinese/extra-hammocks.png',
            'extramaterials': 'technology_chinese/extra-materials.png',
            'handcannonslits': 'technology_chinese/handcannon-slits.png',
            'imperialexaminations': 'technology_chinese/imperial-examination.png',
            'pyrotechnics': 'technology_chinese/pyrotechnics.png',
            'reloaddrills': 'technology_chinese/reload-drills.png',
            'reusablebarrels': 'technology_chinese/reusable-barrels.png',

            'firelancer3': 'unit_chinese/fire-lancer-3.png',
            'firelancer_4': 'unit_chinese/fire-lancer-3.png',
            'grenadier2': 'unit_chinese/grenadier-4.png',
            'imperialofficial': 'unit_chinese/imperial-official.png',
            'wargalley': 'unit_chinese/junk.png',
            'nestofbees': 'unit_chinese/nest-of-bees.png',
            'manatarms3': 'unit_chinese/palace-guard-3.png',
            'manatarms_4': 'unit_chinese/palace-guard-3.png',
            'repeatercrossbowman2': 'unit_chinese/zhuge-nu-2.png',
            'repeatercrossbowman3': 'unit_chinese/zhuge-nu-2.png',
            'repeatercrossbowman4': 'unit_chinese/zhuge-nu-2.png',

            'warship': 'unit_ship/baochuan.png',
            'fireship': 'unit_ship/explosive-junk.png',
            'generalship': 'unit_ship/war-junk.png'
        };
    } else if (civ_name === 'Abbasid Dynasty') {
        return {
            'culturewing': 'landmark_abbasid/culture-wing.png',
            'economicwing': 'landmark_abbasid/economic-wing.png',
            'buildinglandmarkhouseofwisdom': 'landmark_abbasid/house-of-wisdom.png',
            'militarywing': 'landmark_abbasid/military-wing.png',
            'buildingwonderage4spiraltower': 'landmark_abbasid/prayer-hall-of-uqba.png',
            'tradewing': 'landmark_abbasid/trade-wing.png',

            'agriculture': 'technology_abbasid/agriculture.png',
            'traderarmor': 'technology_abbasid/armored-caravans.png',
            'bootcamp': 'technology_abbasid/boot-camp.png',
            'camelarmor': 'technology_abbasid/camel-barding.png',
            'camelhandling': 'technology_abbasid/camel-handling.png',
            'mamelukeshields': 'technology_abbasid/camel-rider-shields.png',
            'camelsupport': 'technology_abbasid/camel-support.png',
            'compositebows': 'technology_abbasid/composite-bows.png',
            'faith': 'technology_abbasid/faith.png',
            'freshfoodstuffs': 'technology_abbasid/fresh-foodstuffs.png',
            'improvedtraderate': 'technology_abbasid/grand-bazaar.png',
            'improveddeposits': 'technology_abbasid/improved-processing.png',
            'medicalcenters': 'technology_abbasid/medical-centers.png',
            'phalanx': 'technology_abbasid/phalanx.png',
            'preservationofknowledge': 'technology_abbasid/preservation-of-knowledge.png',
            'tradergoldincome': 'technology_abbasid/spice-roads.png',
            'teakmasts': 'technology_abbasid/teak-masts.png',

            'camelarcher2': 'unit_abbasid/camel-archer-2.png',
            'mameluke3': 'unit_abbasid/camel-rider-3.png',
            'monk3': 'unit_abbasid/imam.png',

            'generalship': 'unit_ship/baghlah.png',
            'wargalley': 'unit_ship/dhow.png',
            'fireship': 'unit_ship/explosive-dhow.png',
            'warship': 'unit_ship/xebec.png',

            'university': 'building_technology/madrasa.png'
        };
    } else if (civ_name === 'Rus') {
        return {
            'palisadegate': 'building_rus/fortified-palisade-gate.png',
            'palisadewall': 'building_rus/fortified-palisade-wall.png',
            'huntingcabin': 'building_rus/hunting-cabin.png',
            'woodenfortress': 'building_rus/wooden-fortress.png',

            'buildinglandmarkage2trinitylavra': 'landmark_rus/abbey-of-the-trinity.png',
            'buildingwonderage4stupa': 'landmark_rus/cathedral-of-the-tsar.png',
            'buildinglandmarkage3kremlinarmory': 'landmark_rus/high-armory.png',
            'buildinglandmarkage2muscovytradecompany': 'landmark_rus/high-trade-house.png',
            'buildinglandmarkage1novgorodkremlin': 'landmark_rus/kremlin.png',
            'buildinglandmarkage3spassakayatower': 'landmark_rus/spasskaya-tower.png',
            'buildinglandmarkage1goldengatevladimir': 'landmark_rus/the-golden-gate.png',

            'springaldbandedarms': 'technology_rus/banded-arms.png',
            'blessingduration': 'technology_rus/blessing-duration.png',
            'boyarsfortitude': 'technology_rus/boyars-fortitude.png',
            'castleturret': 'technology_rus/castle-turret.png',
            'castlewatch': 'technology_rus/castle-watch.png',
            'cedarhulls': 'technology_rus/cedar-hulls.png',
            'advancedclinker': 'technology_rus/clinker-construction.png',
            'doubletime': 'technology_rus/double-time.png',
            'finetunedguns': 'technology_rus/fine-tuned-guns.png',
            'improvedblessing': 'technology_rus/improved-blessing.png',
            'cavalrysabres': 'technology_rus/knight-sabers.png',
            'streltsyprecision': 'technology_rus/mounted-precision.png',
            'saintsreach': 'technology_rus/saints-reach.png',
            'siegecrewtraining': 'technology_rus/siege-crew-training.png',
            'wanderingtown': 'technology_rus/wandering-town.png',

            'horsearcher3': 'unit_rus/horse-archer-3.png',
            'wargalley': 'unit_rus/lodya-attack-ship.png',
            'fireship': 'unit_rus/lodya-demolition-ship.png',
            'fishingboat': 'unit_rus/lodya-fishing-boat.png',
            'tradeship': 'unit_rus/lodya-trade-ship.png',
            'transport': 'unit_rus/lodya-transport-ship.png',
            'streltsy': 'unit_rus/streltsy.png',
            'warriormonk': 'unit_rus/warrior-monk.png'
        };
    } else {
        return {};
    }
}

/** Convert an image name to the Illustrated Build Order name
 *
 * @param civ_name - civilization name
 * @param input    - input to convert
 */
function convertToIllustratedBuildImage(civ_name, input) {
    var civilization_images = getCivilizationImages(civ_name);
    if (input in civilization_images) {
        return '@' + civilization_images[input] + '@'
    }

    var common_images = getCommonImages();
    if (input in common_images) {
        return '@' + common_images[input] + '@'
    }

    return input;
}

/** Convert notes line to add the correct format for the images of the Illustrated Build Order
 *
 * @param civ_name - civilization name
 * @param input    - input line to convert
 */
function convertNotesIllustrations(civ_name, input) {
    var array1 = input.split('<a class="tooltip">'); // detect images references (cut the line in an array)
    if (array1.length == 0) {
        return input;
    }
    var output = array1[0]; // add the first part of the line

    for (let i = 1; i < array1.length; i++) { // loop on all the images references starts

        var array2 = array1[i].split('</a>'); // detect the end of the image reference
        if (array2.length > 1) {

            var array3 = array2[0].split('src='); // look for the image path
            if (array3.length > 1) {

                var array4 = array3[1].split('.png'); // look for the image extension
                if (array4.length > 1) {

                    var array5 = array4[0].split('/'); // look for the image name
                    if (array5.length > 1) {
                        output += convertToIllustratedBuildImage(civ_name, array5[array5.length - 1]);
                    }
                }
            }
            output += array2[1];
        } else {
            output += array1[i];
        }
    }
    return output;
}

/** Get the value for a resource (integer, -1 if not properly defined)
 *
 * @param input - input to convert
 */
function resourceValue(input) {
    if ((input != '') && (input != ' ')) {

        if ((typeof input == 'string') && !isNaN(input) && !isNaN(parseInt(input))) {
            return parseInt(input);
        } else {
            return -1;
        }
    } else {
        return -1;
    }
}

/** Convert a civilization name for the Illustrated Build Order
 *
 * @param input - input to convert
 */
function civToOverlayName(input) {
    var input_lower = input.toLowerCase()

    if (input_lower.includes('english')) {
        return 'English';
    } else if (input_lower.includes('french')) {
        return 'French';
    } else if (input_lower.includes('delhi')) {
        return 'Delhi';
    } else if (input_lower.includes('mongols')) {
        return 'Mongols';
    } else if (input_lower.includes('holy')) {
        return 'Holy Roman Empire';
    } else if (input_lower.includes('chinese')) {
        return 'Chinese';
    } else if (input_lower.includes('abbasid')) {
        return 'Abbasid Dynasty';
    } else if (input_lower.includes('rus')) {
        return 'Rus';
    } else {
        return 'unknown';
    }
}

/** Convert civilization focus to build order name
 *
 * @param input - input to convert
 */
function focusToBuildOrderName(input) {
    var array = input.split(' (by ');

    if (array.length > 1) {
        return array[0];
    } else {
        return input;
    }
}

/** Convert civilization focus to author name
 *
 * @param input - input to convert
 */
function focusToAuthorName(input) {
    var array1 = input.split(' (by ');
    if (array1.length > 1) {

        var array2 = array1[1].split(')');
        if (array2.length > 1) {
            return array2[0];
        } else {
            return 'unknown';
        }

    } else {
        return 'unknown';
    }
}

// Copy to clipboard for Illustrated Build Order format
function copyForIllustratedOverlay() {

    // selected civilization
    var civName = civToOverlayName(document.getElementById("civilizationName").innerHTML);

    // start JSON Obj
    var jsonObj = {
        civilization: civName,
        name: focusToBuildOrderName(document.getElementById("civilizationFocus").innerHTML),
        author: focusToAuthorName(document.getElementById("civilizationFocus").innerHTML),
        source: "unknown",
        build_order: []
    };

    // loop on the rows of the build table
    var firstRow = true;
    var rows = document.getElementById("buildTable").rows;

    for (var currentLine of rows) {
        // skip the first row
        if (firstRow) {
            firstRow = false;
            continue;
        }

        // new step element for the JSON format
        var newStepJson = {
            age: -1, // unknown
            population_count: -1 // unknown
        };

        // add time if indicated
        var timeTarget = currentLine.cells[0].innerHTML;
        if (timeTarget != "" && timeTarget != " ") {
            newStepJson["time"] = timeTarget;
        }

        // villagers per resource
        var foodValue = resourceValue(currentLine.cells[1].innerHTML);
        var woodValue = resourceValue(currentLine.cells[2].innerHTML);
        var goldValue = resourceValue(currentLine.cells[4].innerHTML);
        var stoneValue = resourceValue(currentLine.cells[3].innerHTML);

        // set villager count to all of the villagers on resouces combined
        if ((foodValue >= 0 && woodValue >= 0 && goldValue >= 0 && stoneValue >= 0)) {
            newStepJson["villager_count"] = foodValue + woodValue + goldValue + stoneValue;
        } else { // at least one resource not specified
            newStepJson["villager_count"] = -1;
        }

        // resources
        newStepJson["resources"] = {
            food: foodValue,
            wood: woodValue,
            gold: goldValue,
            stone: stoneValue
        };

        // notes in a single line
        var single_line_notes = convertNotesIllustrations(civName, currentLine.cells[5].innerHTML);

        // split the single line to multiple ones, using the ". " pattern
        var notes = single_line_notes.split(". ");
        for (let i = 0; i < notes.length - 1; i++) {
            notes[i] += '.'; // add dot removed by split
        }
        newStepJson["notes"] = notes;

        // add new step
        jsonObj["build_order"].push(newStepJson);
    }
    var str = JSON.stringify(jsonObj, null, 4); // JSON to output string
    //console.log(str);
    navigator.clipboard.writeText(htmlDecode(str)).then(function() {
        //console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error("Async: Could not copy text: ", err);
    });
}