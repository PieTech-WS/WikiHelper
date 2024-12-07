// 创建悬浮按钮容器
const fabContainer: HTMLDivElement = document.createElement('div');
fabContainer.style.position = 'fixed';
fabContainer.style.bottom = '20px';
fabContainer.style.right = '20px';
fabContainer.style.display = 'flex';
fabContainer.style.flexDirection = 'column';
fabContainer.style.alignItems = 'center';
fabContainer.style.gap = '10px';
document.body.appendChild(fabContainer);

// 创建悬浮按钮
const fabButton: HTMLDivElement = document.createElement('div');
fabButton.innerText = '···';
fabButton.style.width = '60px';
fabButton.style.height = '40px';
fabButton.style.backgroundColor = '#363636';
fabButton.style.borderRadius = '62px';
fabButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
fabButton.style.color = '#fff';
fabButton.style.fontSize = '24px';
fabButton.style.display = 'flex';
fabButton.style.alignItems = 'center';
fabButton.style.justifyContent = 'center';
fabButton.style.cursor = 'pointer';
fabButton.style.transition = 'background-color 0.3s';
fabButton.addEventListener('mouseenter', () => {
    fabButton.style.backgroundColor = '#121212';
});
fabButton.addEventListener('mouseleave', () => {
    fabButton.style.backgroundColor = '#363636';
});
fabContainer.appendChild(fabButton);

// 创建功能菜单
const fabMenu: HTMLDivElement = document.createElement('div');
fabMenu.style.display = 'none';
fabMenu.style.flexDirection = 'column';
fabMenu.style.gap = '10px';
fabContainer.appendChild(fabMenu);

// 添加菜单项的函数
function createMenuItem(text: string, onClick: () => void): void {
    const menuItem: HTMLDivElement = document.createElement('div');
    menuItem.innerText = text;
    menuItem.style.backgroundColor = '#363636';
    menuItem.style.color = '#fff';
    menuItem.style.borderRadius = '62px';
    menuItem.style.padding = '10px';
    menuItem.style.border = '2px solid #B0B0B0'
    menuItem.style.textAlign = 'center';
    menuItem.style.cursor = 'pointer';
    menuItem.style.transition = 'background-color 0.3s';
    menuItem.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    menuItem.addEventListener('click', onClick);
    menuItem.addEventListener('mouseenter', () => {
        menuItem.style.backgroundColor = '#121212';
    });
    menuItem.addEventListener('mouseleave', () => {
        menuItem.style.backgroundColor = '#363636';
    });
    fabMenu.appendChild(menuItem);
}

// 示例反馈函数
function feedback(): void {
    // @ts-ignore
    chrome.runtime.sendMessage({
        message: "org.cora.oww.extension.hoverball.feedback"
    });
}
function settings(): void {

}

function about() : void {

}
// 创建三个菜单项
createMenuItem('反馈', feedback);
createMenuItem('设置', settings);
createMenuItem('关于',about)

// 添加按钮点击事件，控制菜单显示/隐藏
fabButton.addEventListener('click', () => {
    fabMenu.style.display = fabMenu.style.display === 'none' ? 'flex' : 'none';
});
