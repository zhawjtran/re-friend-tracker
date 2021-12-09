export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Requirements Engineering - John's Tracker",
            //***********************************/
            //Attibutes
            "formList": [
                 /*Friends Form*/
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    /*Attributes for Friends Form*/
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id":   "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "url": "/group",
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                /*
                {
                    "id": "PersonForm",
                    "title": "PersonForm",
                    "url": "/friend/:friendKey/",
                    "formFieldList": [
                    ]
                },*/
                {
                    /*Location Form*/
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    /*Attributes for Location Form*/
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "comments",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    /*Add Activify Form*/
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    /*Attributes for Add Activify Form*/
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    /*Group Form*/
                    "id": "GroupForm",
                    "title": "Group",
                    "url": "/group",
                    /*Attributes for Add Group Form*/
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "GroupName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "creationDate",
                            "type": "date",
                            "name": "CreationDate",
                            "width": 2
                        },
                        {
                            "id": "comments",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        }, {
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        } 
                    ]
                },
                {
                    /* ActivityForm Form*/
                    "id": "ActivityForm",
                    "title": "Activity",
                    "url": "/activity",
                    /*Attributes for add Activity Form*/
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Name",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "date",
                            "type": "date",
                            "name": "Date",
                            "width": 2
                        },
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "comments",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        }, {
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                }

            ],

            //***********************************/
            //Pages
            "pageList": [
                //Main-Menu
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user-graduate",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-user-friends",
                            //"color": "wisteria",
                            "color": "carrot",
                            "page": "groupspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-home",
                            "color": "yellow",
                            "page": "locationspage",
                        },
                        {
                            "type": "button",
                            "name": "Activity",
                            "icon": "fa-binoculars",
                            "color": "red",
                            "page": "activitypage",
                        },
                    ]
                },

                //Friends-Page
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user-graduate",
                            "color": "green",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            //"icon": "fa-user",
                            "icon": "fa-user-graduate",
                            "color": "blue",
                            "search": true,
                            "url": "/friend",
                            "page": "personpage",
                        },
                    ]
                },

                //Person-Page
                {
                    "id": "personpage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditFriend",
                            "icon": "fa-user-graduate",
                            "color": "green",
                            "url": "/friend",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "AddActivity",
                            "icon": "fa-binoculars",
                            "color": "green",
                            
                            "url": "/friend/:friendKey/activity",
                            
                            "form": {
                                "form": "AddActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            //"icon": "fa-user",
                            "icon": "fa-binoculars",
                            "color": "blue",
                            "search": true,
                            "url": "/friend/:friendKey/activity",
                            "form": {
                                "form": "ActivityForm"
                            }
                        }
                    ]
                },

                //Location Page
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "url": "/location",
                            "page": "singlelocationpage",
                        }
                    ]
                },

                //Single-Location-Page
                {
                    "id": "singlelocationpage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditLocation",
                            "icon": "fa-user-graduate",
                            "color": "green",
                            //"url": "/location/:locationKey/activity",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        /*
                        {
                            "type": "button",
                            "name": "AddActivity",
                            "icon": "fa-binoculars",
                            "color": "green",
                            
                            //"url": "/friend",
                
                            "form": {
                                "form": "AddActivityForm"
                            }
                        },*/
                        {
                            "type": "list",
                            //"icon": "fa-user",
                            "icon": "fa-binoculars",
                            "color": "blue",
                            "search": true,
                            "url": "/location/:locationKey/activity",
                            "form": {
                                "form": "ActivityForm"
                            }
                        }

                    ]
                },

                //Groups Page
                {
                    "id": "groupspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewGroup",
                            "icon": "fa-user-friends",
                            "color": "green",
                            "form": {
                                    "form": "GroupForm"
                            }
                        },
                        //new List
                        {
                            "type": "list",
                            "icon": "fa-user-friends",
                            "color": "wisteria",
                            "search": true,
                            "url": "/group",
                            "form": {
                                "form": "GroupForm"
                        }
                      },

                    ] 
                },

                //Activity-Page
                {
                    "id": "activitypage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewActivity",
                            "icon": "fa-binoculars",
                            "color": "green",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-binoculars",
                            "color": "blue",
                            "search": true,
                            "url": "/activity",
                            "page": "singleactivitypage"
                        },
                    ]
                },

                //Single-Activity-Page
                {
                    "id": "singleactivitypage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditActivity",
                            "icon": "fa-binoculars",
                            "color": "green",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-binoculars",
                            "color": "blue",
                            "search": true,
                            "url": "/activity/:activityKey/friend",
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                    ]
                },

            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
