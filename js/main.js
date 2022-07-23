let postsData = { // publicar datos
    post1:{             // correo
        postId:1,
        userId:2,
        title:"Post 1",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus? Eos itaque recusandae obcaecati nulla facere quisquam, officia quia! Quaerat!",
        creationData:"16/04/2022",
        creationTime:"13:22",
        coverUrl:"https://picsum.photos/id/237/768/384",
    },
    post2:{                         //  Entrada del post
        postId:2,                   //  Id del post
        userId:1,                   //  Id del usuario que publica el post
        title:"Post 2",             //  Titulo del post
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus? Eos itaque recusandae obcaecati nulla facere quisquam, officia quia! Quaerat!",
        creationData:"19/04/2022",  //  Fecha de creacion del post
        creationTime:"15:00",       //  Hora de creacion del post
        coverUrl:"https://picsum.photos/id/20/768/384",    // Portada del post
    },
    post3:{
        postId:3,
        userId:1,
        title:"Post 3",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus? Eos itaque recusandae obcaecati nulla facere quisquam, officia quia! Quaerat!",
        creationData:"10/04/2022",
        creationTime:"18:00",
        coverUrl:"https://picsum.photos/id/12/768/384",
    }
}

let replies = {     // respuestas
    reply1:{        // respuesta
            userId:2,
            postId:1,
            content:"Excelente post 1!",
            creationData:"16/04/2022",
            creationTime:"13:22"
    },
    reply2:{                            //  Entrada del comentario
        userId:1,                       //  Id del usuario que comenta
        postId:1,                         //  Id del post en el que se comenta
        content:"Excelente post 2!",    //  Contenido del comentario
        creationData:"16/04/2022",      //  Fecha de creacion del comentario
        creationTime:"13:22"            //  Hora de creacion del comentario
    },
    reply3:{        
        userId:2,
        postId:3,
        content:"Excelente post 3!",
        creationData:"16/04/2022",
        creationTime:"13:22"
    },
    reply4:{        
        userId:1,
        postId:3,
        content:"Excelente post 4!",
        creationData:"16/04/2022",
        creationTime:"13:22"
    } 
}

let users = {
    user1:{
        userId:1,
        name:"Jonathan Reyes Alatorre",
        avatar:"https://media-exp1.licdn.com//dms/image/C4E03AQEKN_uf1KAPMw/profile-displayphoto-shirnk_800_800/0/1550176229405?e=1623888000&v=beta&t=tNSS_vfQm_6wxfBquADFDLyNnozK3UK_hsS101vQMlQ" 
    },
    user2:{
        userId:2,
        name:"Jonathan Arellano",
        avatar:"https://media-exp1.licdn.com//dms/image/C4E03AQEKN_uf1KAPMw/profile-displayphoto-shirnk_800_800/0/1550176229405?e=1623888000&v=beta&t=tNSS_vfQm_6wxfBquADFDLyNnozK3UK_hsS101vQMlQ" 
    }
}





console.log(Object.keys( postsData))

let keysArray = Object.keys( postsData) // obtengo cada llave
//KeysArray ahora es un array con las llaves dentro de postData

keysArray.forEach( key => { // obtengo el objeto que pertenece a cada una de esas llaves
    console.log(postsData[key])
})


/* let completePostData = {
    post1:{             // correo
        postId:1,
        userId:2,
        title:"Post 1",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minus? Eos itaque recusandae obcaecati nulla facere quisquam, officia quia! Quaerat!",
        creationData:"16/04/2022",
        creationTime:"13:22",
        coverUrl:"https://picsum.photos/id/237/768/384",
        replies:[
            {
                reply
            }
        ]
    },...{...}
}*/




let completePostData = keysArray.reduce( ( accum, current ) => {

    let postId = postsData[ current ].postId
    console.log("el id del post es: ", postId)

    // filtramos los replies correspondientes a este post
    // y los guardamos en postReplies
    let postReplies = Object.values(replies).filter( reply => { // me entrega un array de objetos de cada una de las replies que corresponden al post
        return reply.postId === postId
    })

    console.log("postReplies", postReplies)

//  Agregamos los replies al objeto de cada post
//  let postValue = { ...postsData[ current ], postReplies}
    let postValue = { ...postsData[ current ], repliesPostChidos: postReplies} // le cambio el nombre al postReplies, lo contrario a una deconstruccion

//   devolvemos el objeto con el acumulado de cada post
    return {...accum, [current] : postValue }
},{})


console.log('complete post data: ', completePostData)



/* si quisieramos conservar las llaves

let completePostData = keysArray.reduce( ( accum, current ) => {
    // accum representa el resultado ( completePostData)
    // current representa cada una de las llaves dentro de postData

    let postId = postsData[ current ].postId
    console.log("postId", postId)

    let postValue = { ...postsData[ current ], replies : [] } // representa el objeto de cada post
    //console.log("postValue", postValue)


//  let postReplies = Object.keys( replies ).filter( reply => {     // Object.keys Solo entrega las llaves
    let postReplies = Object.entries( replies ).filter( reply => { // Object.entries entrega un array de arrays donde la primer posicion es la llave y la segunda posicion es el value
       
        console.log("reply", reply)
       
//      return replies[ reply ].postId === postId
        return reply[1].postId === postId
    })

    //postReplies.forEach( reply => {
    //    postValue.replies[ reply[0]] = reply[1]
    //}) 

    console.log( "fromEntries(postReplies)", Object.fromEntries( postReplies) )

    postValue.replies = [ ...postValue.replies, Object.fromEntries( postReplies) ]

    console.log("postReplies",postReplies)

    return {...accum, [current] : postValue }
},{}) */

/* let completePostData = []


const createCompleteColection = () => {
    for( post in postsData){
        let postId = postsData[ post ].postId


        let postObject = {...postsData[ post ], replies : []}
        //console.log("postObject antes", postObject)


        //console.log(`El Id del post es : ${postId}`)
        for( reply in replies ){
            
            // Si el postId de la reply es exactamente igual al postId del post
            if(replies[ reply ].postId === postId){
                let replyObject = replies[reply] // esto representa el replay que si pertenece al post
                //console.log(`El ${reply} Si pertenece`)
                postObject.replies.push(replyObject)
            }else{
                //console.log(`El ${reply} No pertenece`)
            }
        }

        //console.log("postObject despues", postObject) // postObject ahora representa el post con sus respectivos replies
        completePostData.push( postObject )
    }
    console.log(completePostData)
} */




const getPostIdFromReplies = replies => {

    for(reply in replies){
        // reply representa cada llave del objeto 'replies'
        //   replies representa el objeto completo que estamos iterando

        console.log( replies[reply] )// representa cada uno de los objetos dentro del objeto 'replies'
        console.log( replies[reply].postId )
    }
}

const getPostId = posts => {
    console.log("posts", posts)
    for (post in posts){
        
        // Post representa cada llave dentro el objeto Post
        // Posts representa el objeto completo al que estamos iterando
        console.log( "posts[post]",posts[post] )// representa cada uno de los objetos dentro del objeto 'Posts'
        console.log( "posts[post].postId",posts[post].postId )
    }
}

//getPostIdFromReplies( replies )
//getPostId( postsData )
//createCompleteColection()


const printPost = postsToPrint => {
    console.log( "printig posts")
    $(".posts-wrapper").empty()

    for( post in postsToPrint){

        let postData = postsToPrint[ post]

        let { postId, userId, title, content, creationDate, creationTime, coverUrl, replies } = postData
        console.log(replies)
        
        let allRepliesHtml = replies.reduce( ( accum, current ) => {
            let { content, userId, creationTime, creationDate } = current

            let replyHtml = `
            <li class="list-group-item">
                <div class="reply-box">
                    <h3><img src="" alt=""><span>User id: ${ userId }</span></h3>
                    <p>${ content }</p>
                    <p class="text-right text-muted">
                        <span class="date">${ creationDate }</span> 
                        <span class="time">${ creationTime }</span>   
                    </p>
                </div>
            </li>
        `
        return accum + replyHtml
    },"")


    console.log( 'All replies: ', allRepliesHtml )

let postCard = `
<div class="col-12">
    <div class="card mb-3">
        <div class="row no-gutters">
        <div class="col-md-4">
            <img class="w-100" src="${coverUrl}" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${ title }</h5>
            <p class="card-text">${ content }</p>
            <p class="card-text"><small class="text-muted">Creado el <span class="text-dark">${creationDate}</span></small></p>
            </div>
        </div>
        </div>
        <ul class="list-group replies-wrapper">
            ${ allRepliesHtml }
        </ul>
        <div class="reply-form">
            <form action="">
                <div class="form-group d-flex">
                    <input type="text" class="form-control">
                    <button type="button" class="btn btn-success add-reply" data-post-id=${ postId } data-post-key=${post}>></button>
                </div>
            </form>
        </div>
    </div>
</div>
`
        $(".posts-wrapper").append( postCard )
    }
}

printPost( completePostData )

// javascript-11-17-04-2021 02:11:54