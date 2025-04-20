import { createClient } from '@supabase/supabase-js'
const URL = 'https://ybaxqvwakqoevkbrpxtq.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InliYXhxdndha3FvZXZrYnJweHRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNjY1NzUsImV4cCI6MjA2MDc0MjU3NX0.W_YpRs-nX5aCmjETj5XZ86KZ2tr6RmDmM5Om4J1mGkE';

export const supabase = createClient(URL, API_KEY);

