import { getFooters } from "@/lib/footer/getFooters";
import { getHeaders } from "@/lib/header/getHeaders";
import { getPages } from "@/lib/pages/getPages";
import { getPopups } from "@/lib/popup/getPopups";
import { getStories } from "@/lib/story/getStories";
import React from "react";

const styles = {
  padding: "10px 10px",
  borderBottom: "1px solid #ccc",
};

const AdminPage = async () => {
  const pages = await getPages();
  const headers = await getHeaders();
  const footers = await getFooters();
  const stories = await getStories();
  const popups = await getPopups();

  return (
    <div>
      <div>
        <h3>Header:</h3>
        {headers.map((header) => {
          return (
            <div key={header.id} style={styles}>
              <a href={`/admin/header/${header.id}`}>{header.id}</a>
            </div>
          );
        })}
      </div>

      <div>
        <h3>Footer:</h3>
        {footers.map((footer) => {
          return (
            <div key={footer.id} style={styles}>
              <a href={`/admin/footer/${footer.id}`}>{footer.id}</a>
            </div>
          );
        })}
      </div>

      <div>
        <h3>Pages:</h3>
        {pages.map((page) => {
          return (
            <div key={page.id} style={styles}>
              <a href={`/admin/page/${page.slug.item}`}>{page.slug.item}</a>
            </div>
          );
        })}
      </div>

      <div>
        <h3>Stories:</h3>
        {stories.map((story) => {
          return (
            <div key={story.id} style={styles}>
              <a href={`/admin/story/${story.id}`}>{story.id}</a>
            </div>
          );
        })}
      </div>

      <div>
        <h3>Popups:</h3>
        {popups.map((popup) => {
          return (
            <div key={popup.id} style={styles}>
              <a href={`/admin/popup/${popup.id}`}>{popup.id}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminPage;
