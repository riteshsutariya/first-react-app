export default function Person(prop)
{
   return(
       <>
       <h1>First name: {prop.obj.firstName}</h1>
       <h2>Last name: {prop.obj.lastName}</h2>
       </>
   )
}