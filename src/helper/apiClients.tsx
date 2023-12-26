import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { appRouter } from '../../prisha-policy-api/routers/index';

export const client = createTRPCProxyClient<appRouter>({
  links: [httpBatchLink({ url: 'http://localhost:3000/trpc' })],
});

export const  userInfo = async({email,password,})=>{
  const res = await client.login.query({email , password})
  return res;
}

export const employeeDependents = async({employeeId})=>{
  const res = await client.getAllDependentsOfUser.query({employeeId});
  return res;
}

export const allEmployees = async() => {
  const res = await client.getAllEmployees.query();
  return res;
}

export const addDependent =async ({ employeeId ,dateOfBirth , relation,name }) => {
   const res = await client.addDependents.mutate({
    employeeId:employeeId,
    dateOfBirth:dateOfBirth,
    relation:relation,
    name:name
   });

   return res;
 }

 export const deleteDependent = async({dependentId})=>{
    const res = await client.deleteDependents.mutate({dependentId:dependentId});
    return res;
 }

 export const addEmployee = async({ employeeName,designation,dateOfJoining, gender,mobileNumber,email})=>{
  const res = await client.addNewEmployee.mutate({
    newEmployeeDetails: {
      name: employeeName,
      role: "Employee",
      email: email,
      designation: designation,
      dateOfJoining: dateOfJoining,
      gender:gender,
      mobileNumber:mobileNumber,
      insuranceNumber: "ISN112",
    }});

  }
