let userRole: string = "";
let userId: number =0;
let userName = "";
let employeeId: number =0;
export const setUserRole = (role: string) => {
  userRole = role;
};

export const setUserId = (id:number)=>{
  userId = id;
}

export const setUserName = (name:string)=>{
  userName = name;
}

export const setEmployeeId = (id:number)=>{
  employeeId = id;
}

export const getUserRole = (): string => {
  return userRole;
};

export const getUserId = ()=>{
  return userId;
}

export const getUserName = ()=>{
  return userName;
}

export const getEmployeeId = ()=>{
  return employeeId;
}