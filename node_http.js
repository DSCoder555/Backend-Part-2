const express = require('express')
const app = express();
app.use(express.json());

app.post('/api/courses', (req,res)=> {
    if(req.length()>=3){
        const course ={
            //we assign an ID and a name property
            id: courses.length +1,
            name:req.body.name    
        }
        courses.push(course);
        res.send(courses);
    }
})
//I give up ahahahahahahhaha
app.get('/api/courses', (req,res)=>{
    res.send(courses);
})

app.get('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("The course with the given ID was not found");
        return;
    }
        res.send(course);
}
)
app.listen(3000, () => {
    console.log('Listening on port 3000 ...');
})