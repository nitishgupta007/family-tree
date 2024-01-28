const siblingsParent = (siblings, parent) => {
    return siblings?.children?.filter(
        (item) => item.name !== parent?.name
    );
}

export default siblingsParent;