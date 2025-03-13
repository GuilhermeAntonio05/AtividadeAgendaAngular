export interface Usuario {
    token: string;
    id: number; 
    name: string; 
    email: string; 
    password: string; 
    role: 'adm' | 'user'; 
}
