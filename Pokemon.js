var Pikachu = [["attack", 129],
            ["defense", 190],
            ["regeneration", 250],
            ["size", 50],
            ["block", 29],
            ["weaponStrength", 321]];

  window.onload = () => {
    let elements = d3.select(".pokemon")
                     .selectAll("div")
                     .data(Pikachu);

    elements.enter()
            .append("div")
            .style("width", (d) => d[1] + "px")
            .text((d) => d[0] + "_" + d[1]);
  }
