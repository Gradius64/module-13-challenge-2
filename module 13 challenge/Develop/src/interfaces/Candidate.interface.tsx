// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    name?: string; // Optional, as not all users may have a name
    bio?: string; // Optional, as not all users may have a bio
    followers: number;
    following: number;
    public_repos: number;
    created_at: string; // Date string in ISO format
}