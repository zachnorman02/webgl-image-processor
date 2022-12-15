import os

if __name__ == '__main__':
    working_dir = os.path.abspath(__file__).replace('\\', '/').replace('build.py', 'kernels.html')
    print(os.path.abspath(__file__))
    print('Copy this file path and open it in your web browser: ', working_dir)
    