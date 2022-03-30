$(document).ready(function() {
    let pet = {
        pet1: {
            "name": "Ginny",
            "type": "Dog",
            "breed": "Border Collie",
            "birthday": "08/26/2015",
            "img": "../images/dog.jpg",
            "alt": "image of Ginny"
        },
        pet2: {
            "name": "Lily",
            "type": "Cat",
            "breed": "Tabby",
            "birthday": "06/15/2013",
            "img": "../images/cat.jpg",
            "alt": "image of Lily"
        },
        pet3: {
            "name": "Piggy",
            "type": "Guinea Pig",
            "breed": "Teddy Guinea Pig",
            "birthday": "02/09/2019",
            "img": "../images/piggy.jpg",
            "alt": "image of Piggy"
        },
        pet4: {
            "name": "Julio",
            "type": "Bird",
            "breed": "Parakeet",
            "birthday": "04/03/2020",
            "img": "../images/bird.jpg",
            "alt": "image of Julio"
        }
    }

    $.each(pet, function(i){
        let name = pet[i].name;
        let type = pet[i].type;
        let breed = pet[i].breed;
        let birthday = pet[i].birthday;
        let img = pet[i].img;
        let alt = pet[i].alt;

        $('#petDiv').append(
            `<div class="card m-5" style="width: 18rem;">
                <div class="card-body">
                    <img src="`+img+`" class="card-img-top" alt="`+alt+`">
                    <h3 class="card-title p-2" style="text-align: center">`+name+`</h3>
                    <table class="table table-striped">
                        <tbody>
                            <tr>
                                <th>Type:</th>
                                <td>`+type+`</td>
                            </tr>
                            <tr>
                                <th>Breed:</th>
                                <td>`+breed+`</td>
                            </tr>
                            <tr>
                                <th>Birthday:</th>
                                <td>`+birthday+`</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`
        )
    });

});


