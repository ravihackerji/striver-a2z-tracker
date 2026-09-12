import {collection,doc,onSnapshot,setDoc} from "firebase/firestore";
import {db} from "./firebase";import type {ProgressRecord,DayPlan} from "../types";
export const progressCollection=(uid:string)=>collection(db,"users",uid,"progress");
export const plansCollection=(uid:string)=>collection(db,"users",uid,"plans");
export async function setProgress(uid:string,id:string,data:ProgressRecord){await setDoc(doc(progressCollection(uid),id),{...data},{merge:true});}
export function watchProgress(uid:string,cb:(d:Record<string,ProgressRecord>)=>void){return onSnapshot(progressCollection(uid),s=>{const r:Record<string,ProgressRecord>={};s.forEach(d=>r[d.id]=d.data() as ProgressRecord);cb(r);});}
export async function savePlans(uid:string,plans:DayPlan[]){for(const p of plans)await setDoc(doc(plansCollection(uid),String(p.day)),p,{merge:true});}
export function watchPlans(uid:string,cb:(p:DayPlan[])=>void){return onSnapshot(plansCollection(uid),s=>cb(s.docs.map(d=>d.data() as DayPlan).sort((a,b)=>a.day-b.day)));}