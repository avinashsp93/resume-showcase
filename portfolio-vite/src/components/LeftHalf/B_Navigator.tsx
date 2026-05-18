import { useData } from "../../contexts/DataContext";

function Navigator() {
  const {
    leftHalf: { navigators },
  } = useData();

  const sectionIds: Record<string, string> = {
    Contact: "contact",
    About: "biography",
    Experience: "experiences",
    Tech_Stacks: "tech-stacks",
    Projects: "projects",
  };

  const handleNavigatorClick = (navigator: string) => {
    const sectionId =
      sectionIds[navigator] ?? navigator.toLowerCase().replace(/\s+/g, "-");
    // Add color change logic to anchor tags
    const anchorTags = document.querySelectorAll(".navigator a");
    anchorTags.forEach((anchor) => {
      if (anchor.getAttribute("href") === `#${sectionId}`) {
        anchor.classList.add("active");
      } else {
        anchor.classList.remove("active");
      }
    });
  };

  return (
    <div className="navigator">
      <ul>
        {navigators.map((navigator, index) => (
          <li key={index} onClick={() => handleNavigatorClick(navigator)}>
            <a
              href={`#${sectionIds[navigator] ?? navigator.toLowerCase().replace(/\s+/g, "-")}`}
              className="h6 text-uppercase"
            >
              {navigator}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigator;
