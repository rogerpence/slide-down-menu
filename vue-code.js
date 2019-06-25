const artists = new Vue({
    el: '#table-container',
    data : {
        //columnsUsed: ["Artist", "Album", "Genre", "Rating"],
        columnsUsed: ["Artist", "Album"],
        rows: [
            {
                "Artist": "The Byrds",
                "Album": "Sweethearts Of The Rodeo",
                "Genre": "So Cal",
                "Rating": "*****"
            },
            {
                "Artist": "Tears for Fears",
                "Album": "Everyone Wants To Rule The World",
                "Genre": "80s",
                "Rating": "******"
            },
            {
                "Artist": "Al Green",
                "Album": "Your Heart's In Good Hands",
                "Genre": "R&B",
                "Rating": "*********"
            },
            {
                "Artist": "Arlo Guthrie",
                "Album": "Alice's Restaurant",
                "Genre": "60s",
                "Rating": "******"
            },
            {
                "Artist": "Bodeans",
                "Album": "Outside Looking In",
                "Genre": "Jangly guitars",
                "Rating": "*********"
            },
            {
                "Artist": "Brandon Flowers",
                "Album": "Flamingo",
                "Genre": "2000s",
                "Rating": "**********"
            },
            {
                "Artist": "Buddy Holly and the Crickets",
                "Album": "Holly In The Hills",
                "Genre": "50s",
                "Rating": "*******"
            },
            {
                "Artist": "Crosby, Stills, and Nash",
                "Album": "Crosby, Stills, and Nash",
                "Genre": "60s",
                "Rating": "**********"
            },
            {
                "Artist": "Frank Zappa and the Mothers of Invention",
                "Album": "Crusing with Rebuen and the Jets",
                "Genre": "60s",
                "Rating": "********"
            },
            {
                "Artist": "Darryl Hall & John Oates",
                "Album": "Our Kind Of Soul",
                "Genre": "R&B",
                "Rating": "**********"
            },
            {
                "Artist": "Diana Ross & Marvin Gaye",
                "Album": "Diana & Marvin",
                "Genre": "R&B",
                "Rating": "**********"
            },
            {
                "Artist": "Eddie Hinton",
                "Album": "Cry And Moan",
                "Genre": "R&B",
                "Rating": "********"
            },
            {
                "Artist": "Buckwheat Zydeco",
                "Album": "On A Night Like This",
                "Genre": "Zydeco",
                "Rating": "*******"
            },
            {
                "Artist": "Firetown",
                "Album": "In The Heart Of Heart Country",
                "Genre": "Albany, NY",
                "Rating": "**********"
            }
        ]
    },
    methods: {
        "trunc": function(str, len) {
            if (str.length > len) {
                return str.substring(0,len) + '...';            
            }
            else {
                return str;
            }                
        },
        "sortTable": function sortTable(col) {
            this.rows.sort(function (a, b) {
                if (a[col] > b[col]) {
                    return 1;
                } else if (a[col] < b[col]) {
                    return -1;
                }
                return 0;
            })
        }
    },
    computed: {
        "columns": function columns() {
            if (this.rows.length == 0) {
                return [];
            }
            return Object.keys(this.rows[0])
        }
    }            
});    