window.fn = {};

window.fn.toggleMenu = function () {
  document.getElementById('appSplitter').right.toggle();
};

window.fn.loadView = function (index) {
  document.getElementById('appTabbar').setActiveTab(index);
  document.getElementById('sidemenu').close();
};

window.fn.loadLink = function (url) {
  window.open(url, '_blank');
};

window.fn.pushPage = function (page, anim) {
  if (anim) {
    document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title }, animation: anim });
  } else {
    document.getElementById('appNavigator').pushPage(page.id, { data: { title: page.title } });
  }
};


$(document).ready(function () {
    $('#search-button').on('click', runSearch)


    function runSearch(){
        let query = $('#search-field').val();
        console.log(query)



    $.get('https://itunes.apple.com/search?', {media:'music', term: query }, function (results) {
        
        let myResultsText = results;
        let myResults = JSON.parse(myResultsText);
        //console.log(myResults.results[1].trackName);
        console.log(results)
        
        let $resultsDiv = $('#search-results')
        
        $resultsDiv
            .empty()
            .append(
                $('<h2>')
            )
            .append(myResults.results.map(artistHtml))
        })
    }

    function artistHtml (artist) {
        
        return ` 
        <p><a href="${artist.trackViewUrl}">${artist.artistName}</a> - ${artist.trackName}</p><img width="200" src="${artist.artworkUrl100}">
        `
    }

});


// function get(id) {
//     object = document.getElementById(id)
//     return object
// }



// let subjectHeader = "Report from getJustice: "

// function removeComma(toClean){
//     let extraEnd = toClean.value.slice(-2)
//     let extraFront = toClean.value.slice(24, 26)
//     if (extraEnd === ', ') {
//         let newStr = toClean.value.replace(extraEnd, '')
//         toClean.value = newStr
//         let cleanedStr = toClean.value
//         return cleanedStr
//     } else if (extraFront === ', ') {
//         let newStr = toClean.value.replace(extraFront, '')
//         toClean.value = newStr
//         let cleanedStr = toClean.value
//         return cleanedStr
//     }
// }


// //*** function to remove screenshot ***//

// function removeScreenshot() {
//     $('#remove-screenshot').on('click', function () {
//         $('#new-screenshot').remove()
//         $('#no-screenshot').hide()
//     });
// };


// //***  button functions ***/

// function toggelButtons() {
//     buttons = document.querySelectorAll('.form-btn')
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             if (button.classList.contains('active')) {
//                 button.classList.remove('active')
//             } else {
//                 button.classList.add('active')
//             }

//         })

//     })
// }


// function addRemoveHateCrimeAdresses() {
//     button = get('hate-crime-button')
//     button.addEventListener('click', () => {
//         $("#formcollapseLink").collapse("show")
//         emails = document.querySelectorAll('.email-button')
//         emails.forEach(email => {
//             if (email.classList.contains('hate-crime')) {
//                 email.classList.add('active')
//                 newEmail = email.getAttribute('data-type')
//                 addressField = get('email-address')
//                 if (addressField.value.includes(`${newEmail}, `)) {
//                     email.classList.remove('active')
//                     current = addressField.value
//                     edited = addressField.value.replace(`${newEmail}, `, '')
//                     addressField.value = edited
//                 } else {
//                     current = addressField.value
//                     addressField.value = `${newEmail}, ${current}`
//                 }
//             }
//         })
//     })
// }


// function addRemovePoliceBrutailityAdresses() {
//     button = get('police-brut-button')
//     button.addEventListener('click', () => {
//         $("#formcollapseLink").collapse("show")
//         emails = document.querySelectorAll('.email-button')
//         emails.forEach(email => {
//             if (email.classList.contains('police-brut')) {
//                 email.classList.add('active')
//                 newEmail = email.getAttribute('data-type')
//                 addressField = get('email-address')
//                 if (addressField.value.includes(`${newEmail}, `)) {
//                     email.classList.remove('active')
//                     current = addressField.value
//                     edited = addressField.value.replace(`${newEmail}, `, '')
//                     addressField.value = edited
//                 } else {
//                     current = addressField.value
//                     addressField.value = `${newEmail}, ${current}`
//                 }
//             }
//         })
//     })
// }




// function addRemoveSubject() {
//     buttons = document.querySelectorAll('.subject-button')
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             let subject = button.getAttribute("data-type")
//             let subjectField = get('subject')
//             if (subjectField.value.includes(`${subject}, `)) {
//                 let edited = subjectField.value.replace(`${subject}, `, '')
//                 subjectField.value = edited           
//                 let toClean = subjectField
//                 removeComma(toClean)
//             } else if (subjectField.value.includes(`${subject}`)) {
//                 let edited = subjectField.value.replace(`${subject}`, '')
//                 subjectField.value = edited
//                 let toClean = subjectField
//                 removeComma(toClean)
//             } else {
//                 let current = subjectField.value
//                 subjectField.value = `${current}, ${subject}`
//                 let toClean = subjectField
//                 removeComma(toClean)
//             }
//         })
//     })
// }


// function addRemoveEmailAddress() {
//     let buttons = document.querySelectorAll('.email-button')
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             let newAddress = button.getAttribute("data-type")
//             let addressField = get('email-address')
//             if (addressField.value.includes(`${newAddress},`)) {
//                 let edited = addressField.value.replace(`${newAddress},`, '')
//                 addressField.value = edited
//             } 
//             else {
//                 let current = addressField.value
//                 addressField.value = `${newAddress}, ${current}`
//             }
//         })
//     })
// }

// // let searchButton = document.getElementById('search-button')
// // let searchInput = document.getElementById('search-input')

// // searchInput.addEventListener('keyup', function (event) {
// //   if (event.keyCode === 13) {
// //     apiCall()
// //   }
// // })

// // searchButton.addEventListener('click', function (event) {
// //   apiCall()

// // })

// // function apiCall (event) {
// //   $.ajax({
// //     url: 'https://api.civil.services/v1/geolocation/zipcode/zipcode?apikey=ADF9577E-4D21-6774-C97E-BFB2464AF4F9',
    
// //     data: {
// //         zipcode= searchInput.value

// //     },


// //     success: function (reps) {
// //       let repsResults = document.getElementById('reps-results')
// //       repsResults.innerHTML= ''
// //       for (let rep of reps.results) {
// //         let repCity = document.createElement('div')

// //         repCity.innerText = rep.city

// //         repsResults.appendChild(repCity)
// //       }
// //     }
// //   })
// // }

//      /*

// var getRandomName = function () {
//         const names = ['Oscar', 'Max', 'Tiger', 'Sam', 'Misty', 'Simba', 'Coco', 'Chloe', 'Lucy', 'Missy'];
//         return names[Math.floor(Math.random() * names.length)];
//       };
//       var getRandomUrl = function () {
//         const width = 40 + Math.floor(20 * Math.random());
//         const height = 40 + Math.floor(20 * Math.random());
//         return `https://placekitten.com/g/${width}/${height}`;
//       }; 
//        var getRandomKitten = function () {
//         return {
//           name: getRandomName(),
//           url: getRandomUrl()
//         };
//       };
//       var getRandomData = function () {
//         const data = [];
//         for (var i = 0; i < 8; i++) {
//           data.push(getRandomKitten());
//         }
//         return data;
//       };
//       var createKitten = function (kitten) {
//         return ons.createElement(`
//             <ons-list-item>
//               <div class="left">
//                 <img class="list-item__thumbnail" src="${kitten.url}">
//               </div>
//               <div class="center">${kitten.name}</div>
//             </ons-list-item> {% endcomment %}
//           {% comment %} `
//         );
//       };
//       var kittens = getRandomData();
//       for (kitty of kittens) {
//         var kitten = createKitten(kitty);
//         document.getElementById('kitten-list').appendChild(kitten);
//       };
//       pullHook.onAction = function (done) {
//         setTimeout(function() {
//           document.getElementById('kitten-list').appendChild(createKitten(getRandomKitten()));
//           done();
//         }, 400);
//       }
//     }; 

//     */ 


// //*** called functions ***/
// removeScreenshot()
// toggelButtons()
// get()
// addRemoveEmailAddress()
// addRemoveSubject()
// addRemoveHateCrimeAdresses()
// addRemovePoliceBrutailityAdresses()
