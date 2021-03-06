export const contactService = {
    getContacts,
    removeContact,
    saveContact,
    getContactById,
}


const contacts = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Ochoa Hyde",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824",
        "gold": 15
    },
    {
        "_id": "5a5664025f6ae9aa24a99fde",
        "name": "Hallie Mclean",
        "email": "halliemclean@renovize.com",
        "phone": "+1 (948) 464-2888",
        "gold": 22
    },
    {
        "_id": "5a56640252d6acddd183d319",
        "name": "Parsons Norris",
        "email": "parsonsnorris@renovize.com",
        "phone": "+1 (958) 502-3495",
        "gold": 11
    },
    {
        "_id": "5a566402ed1cf349f0b47b4d",
        "name": "Rachel Lowe",
        "email": "rachellowe@renovize.com",
        "phone": "+1 (911) 475-2312",
        "gold": 77
    },
    {
        "_id": "5a566402abce24c6bfe4699d",
        "name": "Dominique Soto",
        "email": "dominiquesoto@renovize.com",
        "phone": "+1 (807) 551-3258",
        "gold": 17
    },
    {
        "_id": "5a566402a6499c1d4da9220a",
        "name": "Shana Pope",
        "email": "shanapope@renovize.com",
        "phone": "+1 (970) 527-3082",
        "gold": 5
    },
    {
        "_id": "5a566402f90ae30e97f990db",
        "name": "Faulkner Flores",
        "email": "faulknerflores@renovize.com",
        "phone": "+1 (952) 501-2678",
        "gold": 24
    },
    {
        "_id": "5a5664027bae84ef280ffbdf",
        "name": "Holder Bean",
        "email": "holderbean@renovize.com",
        "phone": "+1 (989) 503-2663",
        "gold": 5
    },
    {
        "_id": "5a566402e3b846c5f6aec652",
        "name": "Rosanne Shelton",
        "email": "rosanneshelton@renovize.com",
        "phone": "+1 (968) 454-3851",
        "gold": 11
    },
    {
        "_id": "5a56640272c7dcdf59c3d411",
        "name": "Pamela Nolan",
        "email": "pamelanolan@renovize.com",
        "phone": "+1 (986) 545-2166",
        "gold": 50
    },
    {
        "_id": "5a5664029a8dd82a6178b15f",
        "name": "Roy Cantu",
        "email": "roycantu@renovize.com",
        "phone": "+1 (929) 571-2295",
        "gold": 58
    },
    {
        "_id": "5a5664028c096d08eeb13a8a",
        "name": "Ollie Christian",
        "email": "olliechristian@renovize.com",
        "phone": "+1 (977) 419-3550",
        "gold": 31
    },
    {
        "_id": "5a5664026c53582bb9ebe9d1",
        "name": "Nguyen Walls",
        "email": "nguyenwalls@renovize.com",
        "phone": "+1 (963) 471-3181",
        "gold": 15
    },
    {
        "_id": "5a56640298ab77236845b82b",

        "name": "Glenna Santana",
        "email": "glennasantana@renovize.com",
        "phone": "+1 (860) 467-2376",
        "gold": 33
    },
    {
        "_id": "5a56640208fba3e8ecb97305",
        "name": "Malone Clark",
        "email": "maloneclark@renovize.com",
        "phone": "+1 (818) 565-2557",
        "gold": 40
    },
    {
        "_id": "5a566402abb3146207bc4ec5",
        "name": "Floyd Rutledge",
        "email": "floydrutledge@renovize.com",
        "phone": "+1 (807) 597-3629",
        "gold": 15
    },
    {
        "_id": "5a56640298500fead8cb1ee5",
        "name": "Grace James",
        "email": "gracejames@renovize.com",
        "phone": "+1 (959) 525-2529",
        "gold": 44
    },
    {
        "_id": "5a56640243427b8f8445231e",
        "name": "Tanner Gates",
        "email": "tannergates@renovize.com",
        "phone": "+1 (978) 591-2291",
        "gold": 29
    },
    {
        "_id": "5a5664025c3abdad6f5e098c",
        "name": "Lilly Conner",
        "email": "lillyconner@renovize.com",
        "phone": "+1 (842) 587-3812",
        "gold": 26
    }
];


function getContacts(filter) {
    let filteredContacts = contacts
    if (filter) {
        if (filter.txt) {
            filteredContacts = filteredContacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.txt))
        }
        if (filter.name === 'desc') {
            filteredContacts = filteredContacts.sort((a, b) => (a.name > b.name) ? -1 : 1)
        } else if (filter.name === 'esc') {
            filteredContacts = filteredContacts.sort((a, b) => (a.name < b.name) ? -1 : 1)
        }
        if (filter.gold === 'desc') {
            filteredContacts = filteredContacts.sort((a, b) => (a.gold > b.gold) ? -1 : 1)
        } else if (filter.gold === 'esc') {
            filteredContacts = filteredContacts.sort((a, b) => (a.gold < b.gold) ? -1 : 1)
        }

    }
    return [...filteredContacts]
}


function removeContact(id) {
    const idx = contacts.findIndex(contact => contact._id === id)
    contacts.splice(idx, 1)
}


function saveContact(contact) {
    return contact._id ? _updateContact(contact) : _addContact(contact)
}


function _addContact(contact) {
    contact._id = Math.random()
    contacts.unshift(contact)
    return contact
}

function _updateContact(contact) {
    const idx = contacts.findIndex(c => c._id === contact._id)
    contacts.splice(idx, 1, contact)
    return contact
}

function getContactById(id) {
    return contacts.find(contact => contact._id === id)
}