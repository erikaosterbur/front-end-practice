$(document).ready(function() {
    let pet = {
        pet1: {
            "name": "Ginny",
            "type": "Dog",
            "breed": "Border Collie",
            "birthday": "08/26/2015"
        },
        pet2: {
            "name": "Lily",
            "type": "Cat",
            "breed": "Tabby",
            "birthday": "06/15/2013"
        },
        pet3: {
            "name": "Piggy",
            "type": "Guinea Pig",
            "breed": "Teddy Guinea Pig",
            "birthday": "02/09/2019"
        },
        pet4: {
            "name": "Julio",
            "type": "Bird",
            "breed": "Parakeet",
            "birthday": "04/03/2020"
        }
    }

    $.each(pet, function(i){
        let name = pet[i].name;
        let type = pet[i].type;
        let breed = pet[i].breed;
        let birthday = pet[i].birthday;

        $('#petDiv').append(
            `<div class="card m-5" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">`+name+`</h5>
                    <p class="card-text">`+type+`</p>
                    <p class="card-text">`+breed+`</p>
                    <p class="card-text">`+birthday+`</p>
                </div>
            </div>`
        )
    });

});


