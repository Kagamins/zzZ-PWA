import SideBar from "./Sidebar";
export default function Layout({ children }){
    return (
        <div>
        <SideBar />
        <main> {children}</main>
        </div>
    )
}