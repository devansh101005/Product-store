import { neon } from "@neondatabase/serverless";
import dotenv from 'dotenv'

dotenv.config()

const {PGHOST,PGDATABASE,PGUSER,PGPASSWORD} =process.env;


//creates a sql connection using our env variable 
export const sql =neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
)

//this sql function which we export is used as a tagged template literal,wgich allows us to weite  sql queries safely

